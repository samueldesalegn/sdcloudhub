/* ============================================================
   Shared engine for AIF-C01 Field Notes site
   ============================================================ */

/* ---------- Nav scroll-spy + mobile toggle ---------- */
function initNav(){
  const toggle = document.querySelector('.toggle-nav');
  const sidebar = document.getElementById('sidebar');
  if (toggle && sidebar){
    toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }
  const links = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  if (sections.length){
    function onScroll(){
      let current = sections[0];
      const pos = window.scrollY + 120;
      sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec; });
      links.forEach(l => l.classList.remove('active'));
      const match = links.find(l => document.querySelector(l.getAttribute('href')) === current);
      if (match) match.classList.add('active');
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }
  links.forEach(l => l.addEventListener('click', () => sidebar && sidebar.classList.remove('open')));
}

/* ---------- Diagram builders ---------- */
/* Each builder returns {update(cue), reset()}.
   cue.active = [keys...] currently highlighted
   cue.excluded = [keys...] (bars only) currently shown as cut/excluded */

function buildFlow(container, data){
  const seen = new Set();
  const els = {};
  const row = document.createElement('div');
  row.className = 'flow-row diagram';
  data.nodes.forEach((n, i) => {
    const node = document.createElement('div');
    node.className = 'flow-node';
    node.textContent = n.label;
    row.appendChild(node);
    els[n.key] = node;
    if (i < data.nodes.length - 1){
      const arrow = document.createElement('div');
      arrow.className = 'flow-arrow';
      arrow.textContent = '→';
      row.appendChild(arrow);
    }
  });
  container.innerHTML = '';
  container.appendChild(row);

  function apply(active, excluded){
    data.nodes.forEach(n => {
      const el = els[n.key];
      el.classList.remove('active','done');
      if (active.has(n.key)) el.classList.add('active');
      else if (seen.has(n.key)) el.classList.add('done');
    });
    data.nodes.forEach(n => { if (active.has(n.key)) seen.add(n.key); });
  }
  return {
    update(cue){ apply(new Set(cue.active||[]), new Set(cue.excluded||[])); },
    reset(){ seen.clear(); data.nodes.forEach(n => els[n.key].classList.remove('active','done')); }
  };
}

function buildBars(container, data){
  const seen = new Set();
  const els = {};
  const wrap = document.createElement('div');
  wrap.className = 'bars-wrap diagram';
  data.items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'bar-row';
    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = item.label;
    const track = document.createElement('div');
    track.className = 'bar-track';
    const fill = document.createElement('div');
    fill.className = 'bar-fill';
    fill.style.width = (item.value*100) + '%';
    track.appendChild(fill);
    const val = document.createElement('div');
    val.className = 'bar-val';
    val.textContent = item.value.toFixed(2);
    row.appendChild(label); row.appendChild(track); row.appendChild(val);
    wrap.appendChild(row);
    els[item.key] = fill;
  });
  container.innerHTML = '';
  container.appendChild(wrap);

  function apply(active, excluded){
    data.items.forEach(item => {
      const el = els[item.key];
      el.classList.remove('active','excluded');
      if (excluded.has(item.key)) el.classList.add('excluded');
      else if (active.has(item.key)) el.classList.add('active');
    });
  }
  return {
    update(cue){ apply(new Set(cue.active||[]), new Set(cue.excluded||[])); },
    reset(){ data.items.forEach(item => els[item.key].classList.remove('active','excluded')); }
  };
}

function buildCards(container, data){
  const seen = new Set();
  const els = {};
  const wrap = document.createElement('div');
  wrap.className = 'cards-wrap diagram';
  let lastGroup = null;
  data.cards.forEach(c => {
    if (c.group && c.group !== lastGroup){
      const gl = document.createElement('div');
      gl.className = 'cards-group-label';
      gl.textContent = c.group;
      wrap.appendChild(gl);
      lastGroup = c.group;
    }
    const card = document.createElement('div');
    card.className = 'diagram-card';
    card.innerHTML = `<div class="dc-title">${c.title}</div><div>${c.desc||''}</div>`;
    wrap.appendChild(card);
    els[c.key] = card;
  });
  container.innerHTML = '';
  container.appendChild(wrap);

  function apply(active, excluded){
    data.cards.forEach(c => {
      const el = els[c.key];
      el.classList.remove('active','done');
      if (active.has(c.key)) el.classList.add('active');
      else if (seen.has(c.key)) el.classList.add('done');
    });
    data.cards.forEach(c => { if (active.has(c.key)) seen.add(c.key); });
  }
  return {
    update(cue){ apply(new Set(cue.active||[]), new Set(cue.excluded||[])); },
    reset(){ seen.clear(); data.cards.forEach(c => els[c.key].classList.remove('active','done')); }
  };
}

/* ---------- Narrated video player ---------- */
let __activeUtteranceController = null; // ensures only one video speaks at a time

function initVideo(mountEl, video, index){
  const synthAvailable = ('speechSynthesis' in window);

  mountEl.innerHTML = `
    <div class="video-head">
      <span class="video-index">VIDEO ${index}</span>
      <span class="video-title">${video.title}</span>
      <span class="video-len">~${video.length || '4 min'}</span>
    </div>
    <div class="video-stage"></div>
    <div class="video-caption idle">Press play to start.</div>
    <div class="video-controls">
      <button class="video-btn play-btn">▶ Play</button>
      <button class="video-btn secondary restart-btn">↺ Restart</button>
      <div class="video-progress-track"><div class="video-progress-fill"></div></div>
    </div>
    <div class="video-note">${synthAvailable ? "Uses your browser's built-in narration. Works best in Chrome or Edge." : "Narration audio isn't available in this browser — captions will auto-advance instead."}</div>
    <div class="transcript-toggle">Show transcript</div>
    <div class="transcript-body">${video.cues.map(c => `<p>${c.text}</p>`).join('')}</div>
  `;

  const stage = mountEl.querySelector('.video-stage');
  const caption = mountEl.querySelector('.video-caption');
  const playBtn = mountEl.querySelector('.play-btn');
  const restartBtn = mountEl.querySelector('.restart-btn');
  const progressFill = mountEl.querySelector('.video-progress-fill');
  const transcriptToggle = mountEl.querySelector('.transcript-toggle');
  const transcriptBody = mountEl.querySelector('.transcript-body');

  transcriptToggle.addEventListener('click', () => {
    const showing = transcriptBody.classList.toggle('show');
    transcriptToggle.textContent = showing ? 'Hide transcript' : 'Show transcript';
  });

  let diagramApi;
  if (video.visualType === 'flow') diagramApi = buildFlow(stage, video.visualData);
  else if (video.visualType === 'bars') diagramApi = buildBars(stage, video.visualData);
  else diagramApi = buildCards(stage, video.visualData);

  let idx = -1, playing = false, paused = false, fallbackTimer = null;

  function showCue(i){
    idx = i;
    const cue = video.cues[i];
    caption.textContent = cue.text;
    caption.classList.remove('idle');
    diagramApi.update(cue);
    progressFill.style.width = Math.round(((i+1)/video.cues.length)*100) + '%';
  }

  function speakCue(i){
    if (i >= video.cues.length){ finish(); return; }
    showCue(i);
    if (synthAvailable){
      const u = new SpeechSynthesisUtterance(video.cues[i].text);
      u.rate = 1.02;
      u.onend = () => { if (playing && !paused) speakCue(i+1); };
      u.onerror = () => { if (playing && !paused) speakCue(i+1); };
      __activeUtteranceController = { cancel: () => window.speechSynthesis.cancel() };
      window.speechSynthesis.speak(u);
    } else {
      const words = video.cues[i].text.split(/\s+/).length;
      const ms = Math.max(1800, words * 320);
      fallbackTimer = setTimeout(() => { if (playing && !paused) speakCue(i+1); }, ms);
    }
  }

  function finish(){
    playing = false;
    playBtn.textContent = '▶ Replay';
    caption.textContent = 'Video complete — the quiz for this topic is right below.';
  }

  playBtn.addEventListener('click', () => {
    if (playing && !paused){
      paused = true;
      if (synthAvailable) window.speechSynthesis.pause();
      if (fallbackTimer) clearTimeout(fallbackTimer);
      playBtn.textContent = '▶ Resume';
      return;
    }
    if (paused){
      paused = false;
      playing = true;
      playBtn.textContent = '⏸ Pause';
      if (synthAvailable && window.speechSynthesis.paused) window.speechSynthesis.resume();
      else speakCue(idx+1);
      return;
    }
    if (synthAvailable) window.speechSynthesis.cancel();
    if (__activeUtteranceController) __activeUtteranceController.cancel();
    playing = true; paused = false;
    playBtn.textContent = '⏸ Pause';
    speakCue(0);
  });

  restartBtn.addEventListener('click', () => {
    if (synthAvailable) window.speechSynthesis.cancel();
    if (fallbackTimer) clearTimeout(fallbackTimer);
    playing = false; paused = false; idx = -1;
    playBtn.textContent = '▶ Play';
    caption.textContent = 'Press play to start.';
    caption.classList.add('idle');
    diagramApi.reset();
    progressFill.style.width = '0%';
  });
}

/* ---------- Quiz renderer (used for both per-topic quizzes and review) ---------- */
function renderQuizGroup(containerEl, items, idPrefix, scoreEl){
  let answered = 0, correct = 0;
  containerEl.innerHTML = items.map((item, idx) => `
    <div class="quiz-block" data-idx="${idx}">
      <div class="quiz-q">${item.q}</div>
      <div class="quiz-opts">${item.options.map((opt,oi)=>`<label class="quiz-opt"><input type="radio" name="${idPrefix}-${idx}" value="${oi}"><span>${opt}</span></label>`).join('')}</div>
      <button class="quiz-check">Check answer</button>
      <div class="quiz-explain"></div>
    </div>
  `).join('');

  containerEl.querySelectorAll('.quiz-block').forEach((block) => {
    const idx = parseInt(block.getAttribute('data-idx'), 10);
    const item = items[idx];
    block.querySelector('.quiz-check').addEventListener('click', () => {
      const selected = block.querySelector(`input[name="${idPrefix}-${idx}"]:checked`);
      if (!selected) return;
      const val = parseInt(selected.value, 10);
      const opts = block.querySelectorAll('.quiz-opt');
      opts.forEach((opt, oi) => {
        if (oi === item.correct) opt.classList.add('correct');
        else if (oi === val) opt.classList.add('incorrect');
      });
      const right = val === item.correct;
      const explainEl = block.querySelector('.quiz-explain');
      explainEl.innerHTML = `<div class="quiz-verdict ${right?'right':'wrong'}">${right?'Correct.':'Not quite.'}</div><div>${item.explain}</div>`;
      explainEl.classList.add('show');
      block.querySelector('.quiz-check').disabled = true;
      block.querySelectorAll('input').forEach(r => r.disabled = true);
      answered++; if (right) correct++;
      if (scoreEl) scoreEl.textContent = `${answered} of ${items.length} answered · ${correct} correct`;
    });
  });
}

/* ---------- Exam engine ---------- */
const examState = { key:null, timerInterval:null, remaining:0, submitted:false };

function startExam(examKey){
  const exam = EXAM_DATA[examKey];
  examState.key = examKey;
  examState.submitted = false;
  examState.remaining = 90*60;

  document.getElementById('exam-picker').style.display = 'none';
  const active = document.getElementById('exam-active');
  active.style.display = 'block';
  document.getElementById('exam-name').textContent = exam.name;
  document.getElementById('exam-result').style.display = 'none';
  document.getElementById('exam-result').innerHTML = '';

  const qContainer = document.getElementById('exam-questions');
  qContainer.innerHTML = exam.questions.map((item, idx) => `
    <div class="quiz-block" data-idx="${idx}">
      <div class="quiz-domain-label">${item.domain} · Question ${idx+1} of ${exam.questions.length}</div>
      <div class="quiz-q">${item.q}</div>
      <div class="quiz-opts">${item.options.map((opt,oi)=>`<label class="quiz-opt"><input type="radio" name="exq-${idx}" value="${oi}"><span>${opt}</span></label>`).join('')}</div>
    </div>
  `).join('');

  updateTimerDisplay();
  clearInterval(examState.timerInterval);
  examState.timerInterval = setInterval(() => {
    examState.remaining--;
    updateTimerDisplay();
    if (examState.remaining <= 0){
      clearInterval(examState.timerInterval);
      submitExam();
    }
  }, 1000);

  window.scrollTo(0,0);
}

function updateTimerDisplay(){
  const m = Math.floor(examState.remaining/60), s = examState.remaining%60;
  const el = document.getElementById('exam-timer');
  if (!el) return;
  el.textContent = `${m}:${String(s).padStart(2,'0')}`;
  el.classList.toggle('low', examState.remaining <= 300);
}

function submitExam(){
  if (examState.submitted) return;
  examState.submitted = true;
  clearInterval(examState.timerInterval);

  const exam = EXAM_DATA[examState.key];
  let correctCount = 0;
  const domainStats = {};
  const missed = [];

  exam.questions.forEach((item, idx) => {
    const sel = document.querySelector(`input[name="exq-${idx}"]:checked`);
    const val = sel ? parseInt(sel.value, 10) : -1;
    const right = val === item.correct;
    if (right) correctCount++;
    domainStats[item.domain] = domainStats[item.domain] || {correct:0, total:0};
    domainStats[item.domain].total++;
    if (right) domainStats[item.domain].correct++;
    if (!right) missed.push({item, val, idx});

    const block = document.querySelector(`#exam-questions .quiz-block[data-idx="${idx}"]`);
    block.querySelectorAll('input').forEach(r => r.disabled = true);
    const opts = block.querySelectorAll('.quiz-opt');
    opts.forEach((opt, oi) => {
      if (oi === item.correct) opt.classList.add('correct');
      else if (oi === val) opt.classList.add('incorrect');
    });
  });

  const scaled = Math.round((correctCount/exam.questions.length)*1000);
  const pass = scaled >= 700;

  const domainRows = Object.keys(domainStats).map(d => {
    const s = domainStats[d];
    return `<div class="weight-row"><div class="weight-name">${d}</div><div class="weight-track"><div class="weight-fill" style="width:${Math.round((s.correct/s.total)*100)}%"></div></div><div class="weight-pct">${s.correct}/${s.total}</div></div>`;
  }).join('');

  const missedHtml = missed.length ? missed.map(m => `
    <div class="review-item wrong">
      <div style="font-size:13px;color:var(--paper-dimmer);font-family:var(--mono);margin-bottom:4px;">${m.item.domain} · Q${m.idx+1}</div>
      <div style="color:var(--paper);margin-bottom:6px;">${m.item.q}</div>
      <div style="font-size:13.5px;color:var(--paper-dim);">Correct answer: <strong style="color:var(--verified)">${m.item.options[m.item.correct]}</strong><br>${m.item.explain}</div>
    </div>
  `).join('') : '<p style="color:var(--verified)">No missed questions.</p>';

  const resultEl = document.getElementById('exam-result');
  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div class="exam-result">
      <div class="exam-score-num ${pass?'pass':'fail'}">${scaled}</div>
      <div class="exam-score-label">SCALED SCORE / 1000 · PASS IS 700 · ${pass ? 'PASS' : 'NOT YET'}</div>
      <p style="margin-top:16px;color:var(--paper-dim);">${correctCount} of ${exam.questions.length} correct</p>
      <div class="exam-breakdown">
        <h4 class="subsub">By domain</h4>
        <div class="weights">${domainRows}</div>
        <h4 class="subsub">Review — missed questions</h4>
        ${missedHtml}
      </div>
    </div>
  `;
  window.scrollTo({top: resultEl.offsetTop - 20, behavior:'smooth'});
}
