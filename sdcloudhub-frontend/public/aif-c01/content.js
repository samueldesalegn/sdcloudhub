/* ============================================================
   Video scripts + topic quizzes, grouped by domain
   ============================================================ */

const VIDEOS = {
  d1: [
    {
      id: "d1-1", title: "AI, ML, and Deep Learning — what's actually nested inside what",
      length: "3 min", visualType: "cards",
      visualData: { cards: [
        {key:"ai", title:"Artificial Intelligence", desc:"Systems performing tasks that normally need human intelligence."},
        {key:"ml", title:"Machine Learning", desc:"Learns patterns from data instead of hand-written rules."},
        {key:"dl", title:"Deep Learning", desc:"ML using multi-layer neural networks."},
        {key:"genai", title:"Generative AI", desc:"Deep learning that creates new content, not just predictions."}
      ]},
      cues: [
        {text:`Let's start with four terms that get used almost interchangeably in casual conversation, but the exam wants you to know exactly how they nest inside each other.`, active:[]},
        {text:`At the outer layer is artificial intelligence — the broad goal of building systems that perform tasks normally requiring human intelligence, like understanding language or recognizing a face.`, active:["ai"]},
        {text:`Machine learning is one particular approach to reaching that goal. Instead of writing explicit rules for every situation, a machine learning system learns patterns directly from data.`, active:["ai","ml"]},
        {text:`Deep learning is a subset of machine learning that uses neural networks with many layers. This is the approach that made today's most capable AI systems possible.`, active:["ai","ml","dl"]},
        {text:`And generative AI is a further subset of deep learning: models specifically built to produce new content — text, images, audio, code — rather than just predicting a label or category.`, active:["ai","ml","dl","genai"]},
        {text:`A concrete example: a spam filter using hand-written keyword rules is AI but not ML. One that learns from labeled emails is ML. One using a deep neural network on raw text is deep learning. None of them write a new email, so none of them are generative.`, active:["ai","ml","dl"]},
        {text:`Keep the nesting in your head as a sanity check: the broader term always contains the narrower one, never the other way around. Every generative model is deep learning, but not every deep learning model is generative.`, active:["ai","ml","dl","genai"]},
        {text:`On the exam: if a scenario just classifies or predicts, with no new content produced, that's deep learning or classic ML — not generative AI, even if a neural network is involved.`, active:["genai"]}
      ]
    },
    {
      id: "d1-2", title: "The three ML paradigms, plus the vocabulary that goes with them",
      length: "4 min", visualType: "cards",
      visualData: { cards: [
        {key:"sup", title:"Supervised", desc:"Trained on labeled input/output pairs."},
        {key:"uns", title:"Unsupervised", desc:"Finds structure in unlabeled data."},
        {key:"rl", title:"Reinforcement", desc:"Learns via reward and penalty signals."},
        {key:"over", title:"Overfitting", desc:"Memorizes training data — high variance."},
        {key:"under", title:"Underfitting", desc:"Too simple to learn the pattern — high bias."}
      ]},
      cues: [
        {text:`There are three classic learning paradigms, and the exam expects you to match a scenario to the right one almost by instinct.`, active:[]},
        {text:`Supervised learning trains on labeled data — input and output pairs. Fraud detection, price prediction, and spam filtering all fall here, because you're training on examples where you already know the right answer.`, active:["sup"]},
        {text:`Unsupervised learning works with unlabeled data and finds structure on its own — grouping similar customers together, or flagging data points that don't fit any group, which is anomaly detection.`, active:["uns"]},
        {text:`Reinforcement learning is different from both: an agent interacts with an environment and learns from reward and penalty signals over time. Game-playing agents work this way, and so does RLHF — reinforcement learning from human feedback — which is how many large language models get fine-tuned for helpfulness.`, active:["rl"]},
        {text:`Now, two failure modes that show up constantly in exam scenarios. Overfitting is when a model memorizes the training data — it performs beautifully on what it's seen and poorly on anything new. That's high variance.`, active:["over"]},
        {text:`Underfitting is the opposite: the model is too simple to capture the real pattern, so it performs poorly even on the training data itself. That's high bias.`, active:["under"]},
        {text:`If a question describes great training performance but poor test performance, that's overfitting, full stop. The fix vocabulary to know: more training data, regularization, a simpler model, or stopping training earlier.`, active:["over"]},
        {text:`One more distinction inside supervised learning: regression predicts a continuous number, like a price. Classification predicts a category, like spam or not spam. Both are supervised — they just differ in what kind of answer they produce.`, active:["sup"]}
      ]
    },
    {
      id: "d1-3", title: "How you actually know if a model is any good",
      length: "3 min", visualType: "cards",
      visualData: { cards: [
        {key:"acc", title:"Accuracy", desc:"Correct predictions ÷ total — misleading on imbalanced data."},
        {key:"prec", title:"Precision", desc:"Of predicted positives, how many were right."},
        {key:"rec", title:"Recall", desc:"Of actual positives, how many were caught."},
        {key:"f1", title:"F1 Score", desc:"Balanced mean of precision and recall."},
        {key:"auc", title:"AUC-ROC", desc:"How well the model separates classes overall."}
      ]},
      cues: [
        {text:`Accuracy feels like the obvious metric — correct predictions divided by total predictions — but it's genuinely misleading the moment your data is imbalanced.`, active:["acc"]},
        {text:`Picture a fraud model where only one in a thousand transactions is actually fraud. A model that just guesses "not fraud" every single time scores nearly 100% accuracy while catching zero real fraud. Accuracy alone hides that completely.`, active:["acc"]},
        {text:`That's why precision and recall exist. Precision asks: of everything the model flagged as positive, how much was actually positive? It matters when false alarms are expensive.`, active:["prec"]},
        {text:`Recall asks the opposite question: of everything that was actually positive, how much did the model actually catch? It matters when missing a real case is the expensive mistake — like that hospital screening example we'll hit in the quiz.`, active:["rec"]},
        {text:`F1 score is just a balanced way to report both at once — the harmonic mean of precision and recall — useful when you want one number instead of two competing ones.`, active:["f1"]},
        {text:`AUC-ROC measures how well a model separates the two classes across every possible threshold, not just one. Closer to 1.0 is better separation; 0.5 means the model is doing no better than a coin flip.`, active:["auc"]},
        {text:`For regression tasks — predicting a number, not a category — you'll see RMSE and MAE instead, both measuring the size of the error. Lower is better for both.`, active:[]}
      ]
    },
    {
      id: "d1-4", title: "AWS's AI service stack — build it yourself, or reach for the shelf",
      length: "4 min", visualType: "cards",
      visualData: { cards: [
        {key:"sm", title:"SageMaker", desc:"Build, train, and deploy your own custom models.", group:"Build your own"},
        {key:"rek", title:"Rekognition", desc:"Image and video analysis.", group:"Pre-built services"},
        {key:"comp", title:"Comprehend", desc:"NLP — sentiment, entities, PII detection."},
        {key:"text", title:"Textract", desc:"Extracts text, forms, and tables from documents."},
        {key:"trans", title:"Transcribe", desc:"Speech to text."},
        {key:"polly", title:"Polly", desc:"Text to speech."},
        {key:"lex", title:"Lex", desc:"Conversational chatbot interfaces."}
      ]},
      cues: [
        {text:`AWS's whole AI portfolio sits on a spectrum, and Domain 1 wants you comfortable placing any given scenario on it.`, active:[]},
        {text:`At one end, Amazon SageMaker is the end-to-end platform for building, training, tuning, and deploying your own custom models. You reach for it when you have proprietary data and a task nobody's pre-built a service for.`, active:["sm"]},
        {text:`At the other end sit fully managed, pre-built AI services — no training data or ML expertise required, because AWS already trained the model for a specific common task.`, active:["rek","comp","text","trans","polly","lex"]},
        {text:`Rekognition handles image and video analysis — object detection, facial analysis, content moderation. Comprehend handles natural language tasks — sentiment, entities, and importantly, PII detection.`, active:["rek","comp"]},
        {text:`Textract extracts text, forms, and tables from scanned documents — think insurance forms or invoices. Transcribe converts speech to text; Polly does the reverse, text to speech.`, active:["text","trans","polly"]},
        {text:`And Lex builds conversational chatbot interfaces — the same underlying technology behind Alexa.`, active:["lex"]},
        {text:`AWS's own guidance for choosing between these is refreshingly simple: don't build what you can buy. If a scenario needs a common, well-defined task and there's no proprietary training data involved, reach for the matching pre-built service first. Save SageMaker for when the task is genuinely custom.`, active:["sm","rek","comp","text","trans","polly","lex"]}
      ]
    }
  ]
};

const TOPIC_QUIZZES = {
  "d1-1": [
    {q:"A system classifies images as cats or dogs but never generates new images. What category does it NOT belong to?", options:["Machine learning","Deep learning (if it uses a neural network)","Generative AI","Artificial intelligence"], correct:2,
     explain:"Classification without producing new content isn't generative AI, even if the underlying model is a deep neural network. Generative AI specifically means the model creates new content."},
    {q:"Which statement correctly describes the nesting of these terms?", options:["Deep learning contains machine learning, which contains AI","Generative AI contains deep learning, which contains AI","AI contains machine learning, which contains deep learning, which contains generative AI","The four terms are unrelated categories"], correct:2,
     explain:"The nesting runs from broadest to narrowest: AI → machine learning → deep learning → generative AI. Each is a subset of the one before it."}
  ],
  "d1-2": [
    {q:"A model achieves 99% accuracy on training data but only 61% on new test data. What's happening?", options:["Underfitting","Overfitting","The model needs fewer features","This is normal and expected"], correct:1,
     explain:"A large gap between training and test performance, with training performance being much higher, is the classic signature of overfitting — the model memorized rather than generalized."},
    {q:"An RLHF process ranks model outputs by human preference to train a reward signal. Which learning paradigm is this closest to?", options:["Supervised learning","Unsupervised learning","Reinforcement learning","None of these — RLHF isn't a learning paradigm"], correct:2,
     explain:"RLHF — reinforcement learning from human feedback — is a reinforcement learning approach: a reward model trained on human preferences guides further training of the LLM."}
  ],
  "d1-3": [
    {q:"A fraud-detection dataset has 1 fraud case per 1,000 transactions. A model that predicts 'not fraud' every time scores 99.9% accuracy. What does this reveal?", options:["The model is excellent","Accuracy is misleading on imbalanced data — precision and recall tell the real story","AUC-ROC is irrelevant here","This model has high recall"], correct:1,
     explain:"On heavily imbalanced data, accuracy can look great while the model catches zero real positives. Precision and recall (and F1) expose this in a way plain accuracy can't."},
    {q:"A hospital screening tool must minimize missed cases of a serious condition, even if that means more false alarms. Which metric should be prioritized?", options:["Precision","Recall","Plain accuracy","RMSE"], correct:1,
     explain:"Recall measures how many actual positives were caught. When false negatives (missed real cases) are the costly error, recall is the metric to optimize for."}
  ],
  "d1-4": [
    {q:"A team with no ML expertise needs to extract tables from thousands of scanned invoices. What's the best-fit service?", options:["Amazon SageMaker custom model","Amazon Textract","Amazon Comprehend","Amazon Polly"], correct:1,
     explain:"Textract is purpose-built for extracting text, forms, and tables from scanned documents — a pre-built service beats a custom model for a common, well-defined task."},
    {q:"A company has a large proprietary dataset and needs a model for a task no existing AWS AI service covers. What's the right starting point?", options:["Amazon Rekognition","Amazon Lex","Amazon SageMaker","Amazon Transcribe"], correct:2,
     explain:"SageMaker is the platform for building, training, and deploying fully custom models — the right call when the task is genuinely proprietary and no pre-built service fits."}
  ]
};

/* ---------- Domain 2 ---------- */
VIDEOS.d2 = [
  {
    id: "d2-1", title: "Foundation models and the transformer, in plain terms",
    length: "4 min", visualType: "flow",
    visualData: { nodes: [
      {key:"input", label:"Input tokens"},
      {key:"embed", label:"Embedding"},
      {key:"attn", label:"Self-attention (multi-head)"},
      {key:"ff", label:"Feed-forward layers"},
      {key:"out", label:"Output prediction"}
    ]},
    cues: [
      {text:`A foundation model is a large model pre-trained on broad, mostly unlabeled data at scale — general enough to be adapted to many downstream tasks, unlike a traditional model trained narrowly for one job.`, active:[]},
      {text:`Large language models are foundation models specialized for text. The category also covers diffusion models for images, multimodal models, and embedding models — we'll get to embeddings next.`, active:[]},
      {text:`Almost all of today's foundation models for text are built on one architecture: the transformer, introduced in a 2017 paper called "Attention Is All You Need." Let's walk through what it actually does to a sentence.`, active:["input"]},
      {text:`First, the input text gets broken into tokens — sub-word units the model operates on — and each token becomes a numeric embedding.`, active:["input","embed"]},
      {text:`Then comes the key idea: self-attention. For every token, the model weighs how relevant every other token in the sequence is to it. That's what lets the model understand that in "the trophy didn't fit in the suitcase because it was too big," "it" refers to the trophy, not the suitcase.`, active:["attn"]},
      {text:`The paper actually uses multi-head attention — several attention computations running in parallel, each able to focus on a different kind of relationship between words at once. Not one attention pass, several.`, active:["attn"]},
      {text:`Because attention looks at the whole sequence at once instead of one word at a time, transformers process text in parallel rather than sequentially — which is a big part of why they scale so well with more data and more compute, unlike the older RNN and LSTM architectures they replaced.`, active:["attn","ff"]},
      {text:`After attention, feed-forward layers process each position further, and the model produces a probability distribution over the vocabulary for what comes next. Stack this whole block dozens of times, and you have a modern transformer.`, active:["ff","out"]}
    ]
  },
  {
    id: "d2-2", title: "Tokens, embeddings, and context windows",
    length: "3 min", visualType: "flow",
    visualData: { nodes: [
      {key:"text", label:"Raw text"},
      {key:"tok", label:"Tokenization"},
      {key:"emb", label:"Embedding vector"},
      {key:"space", label:"Vector space"}
    ]},
    cues: [
      {text:`Before a model can do anything with text, that text has to become numbers. Here's the pipeline that makes that happen.`, active:["text"]},
      {text:`Tokenization breaks text into sub-word units called tokens. In English, that's roughly three-quarters of a word per token on average — which is exactly why context windows get measured in tokens, not words.`, active:["text","tok"]},
      {text:`Each token then becomes an embedding — a numeric vector, positioned in a high-dimensional space so that tokens with similar meaning end up close together geometrically.`, active:["tok","emb"]},
      {text:`This is what makes semantic search possible. Searching by embedding similarity finds text that means the same thing, even if it doesn't share a single keyword with your query — which is a completely different mechanism from traditional keyword search.`, active:["emb","space"]},
      {text:`The context window is the maximum number of tokens — input plus output combined — a model can process in a single call. It's a hard ceiling, not something you tune like temperature or top P.`, active:["space"]},
      {text:`Quick exam gut-check: if a question describes finding documents by meaning rather than exact word match, that's embeddings and vector similarity at work — not a keyword index.`, active:["emb","space"]}
    ]
  },
  {
    id: "d2-3", title: "Sampling parameters — how a model actually picks its next word",
    length: "5 min", visualType: "bars",
    visualData: { items: [
      {key:"stars", label:"stars", value:0.6},
      {key:"clouds", label:"clouds", value:0.3},
      {key:"dragons", label:"dragons", value:0.1}
    ]},
    cues: [
      {text:`This is probably the single most precisely-testable topic on the whole exam, so let's slow down and get the mechanics exactly right. Picture the model finishing the sentence "the sky is filled with," and it's assigning probabilities to three candidate next words: stars at 0.6, clouds at 0.3, and dragons at 0.1.`, active:["stars","clouds","dragons"]},
      {text:`Temperature reshapes this whole distribution — it doesn't remove any candidate, it just spreads the odds out or sharpens them. Low temperature makes the high-probability token dominate even more; high temperature gives the long-shot tokens a real chance.`, active:["stars","clouds","dragons"]},
      {text:`Top K is completely different — it's a hard cutoff by count. Set Top K to 2, and only the two most likely tokens survive, period. Here, that's stars and clouds.`, active:["stars","clouds"], excluded:["dragons"]},
      {text:`Dragons is gone. Not "unlikely" — gone. And here's the detail the exam loves to test: no amount of cranking up temperature brings it back, because Top K is applied as a filter before temperature gets any say over what's left.`, active:["stars","clouds"], excluded:["dragons"]},
      {text:`Top P — nucleus sampling — works on a completely different axis: cumulative probability instead of a fixed count. Set Top P to 0.8, and the model adds tokens highest-probability-first until the running total crosses 0.8.`, active:["stars"]},
      {text:`Stars alone is 0.6 — under the threshold. So clouds gets added, and now we're at a cumulative 0.9, which already crosses 0.8. The nucleus locks in as exactly stars and clouds. Dragons is excluded, exactly like it was under Top K — just reached through probability mass instead of a raw count.`, active:["stars","clouds"], excluded:["dragons"]},
      {text:`This is the trap to watch for: it's tempting to think a token just outside the threshold is somehow "still in with a chance." It isn't. Once cumulative probability crosses P, the nucleus is fixed, and everything outside it is excluded before sampling ever happens.`, active:["stars","clouds"], excluded:["dragons"]},
      {text:`So here's the order of operations if a question asks how these interact: temperature reshapes the distribution first, then Top K and Top P filter which of those reshaped candidates are even eligible to be picked from.`, active:["stars","clouds","dragons"]},
      {text:`One more family worth knowing: max tokens sets an explicit length ceiling, stop sequences halt generation immediately when produced, and repetition or frequency penalties discourage the model from reusing the same tokens too often. Notably, asking for "three sentences or less" directly in your prompt achieves something similar to a max-token setting — just through instruction instead of a runtime parameter.`, active:[]}
    ]
  },
  {
    id: "d2-4", title: "Evaluating generated text, and where Bedrock fits in",
    length: "3 min", visualType: "cards",
    visualData: { cards: [
      {key:"rouge", title:"ROUGE", desc:"N-gram overlap for summarization — recall-oriented."},
      {key:"bleu", title:"BLEU", desc:"N-gram overlap for translation — precision-oriented."},
      {key:"bert", title:"BERTScore", desc:"Embedding-based — catches paraphrases n-grams miss."},
      {key:"human", title:"Human evaluation", desc:"Direct human ratings of quality, tone, helpfulness."},
      {key:"bedrock", title:"Amazon Bedrock", desc:"One API to reach many foundation model providers."}
    ]},
    cues: [
      {text:`Precision, recall, and accuracy don't map cleanly onto generated text, because there's no single "correct" sentence to check against — so a separate family of metrics exists.`, active:[]},
      {text:`ROUGE measures overlap between generated and reference text and is recall-oriented — it's the standard for evaluating summaries, checking how much of the important reference content made it into the summary.`, active:["rouge"]},
      {text:`BLEU is precision-oriented, with a built-in penalty for outputs that are suspiciously short, and it's the standard for machine translation instead of summarization.`, active:["bleu"]},
      {text:`Both ROUGE and BLEU compare exact word overlap, which means a perfectly good paraphrase can score poorly on either one. That's the gap BERTScore fills — it compares meaning using contextual embeddings instead of exact word matches, so it catches paraphrases the n-gram metrics miss.`, active:["bert"]},
      {text:`And for nuance that no automated metric captures well — tone, helpfulness, whether an answer actually resolves what someone asked — human evaluation is still the standard.`, active:["human"]},
      {text:`Now, where does all of this actually run? Amazon Bedrock is AWS's managed service for calling foundation models from multiple providers — Anthropic, Meta, Mistral, Amazon's own models — through a single API, without managing any infrastructure yourself.`, active:["bedrock"]},
      {text:`Bedrock gives you playgrounds to experiment with prompts and these sampling parameters before writing code, fine-tuning support for select models, and both on-demand and provisioned-throughput pricing depending on whether your workload is variable or predictable.`, active:["bedrock"]}
    ]
  }
];

Object.assign(TOPIC_QUIZZES, {
  "d2-1": [
    {q:"What architectural innovation did the 2017 'Attention Is All You Need' paper introduce as the basis for modern transformers?", options:["Recurrent memory cells","Self-attention, letting the model weigh relevance across the whole sequence at once","Convolutional filters over text", "Reinforcement learning from human feedback"], correct:1,
     explain:"Self-attention lets the model weigh every other token's relevance when processing a given token, replacing the sequential recurrence used by earlier RNN/LSTM architectures and enabling parallel processing."},
    {q:"Why does the transformer paper describe 'multi-head' attention rather than a single attention mechanism?", options:["It's a marketing term with no technical meaning","Multiple attention computations run in parallel, each able to focus on different relationships","It refers to running the model on multiple GPUs","It means the model has multiple separate vocabularies"], correct:1,
     explain:"Multi-head attention runs several attention computations in parallel, letting the model attend to different kinds of relationships between tokens simultaneously, not just one pass."}
  ],
  "d2-2": [
    {q:"What makes semantic search possible, as opposed to traditional keyword search?", options:["Larger context windows","Embeddings placing semantically similar text close together in vector space","Lower temperature settings","Stop sequences"], correct:1,
     explain:"Embeddings encode meaning as position in a high-dimensional vector space, so similarity search can find text that means the same thing even without shared keywords."},
    {q:"A model has a context window of 8,000 tokens. What does this actually limit?", options:["Only the length of the input prompt","Only the length of the generated output","The combined total of input plus output tokens","The number of API calls per minute"], correct:2,
     explain:"The context window is a hard ceiling on input tokens plus output tokens combined — not a separately tunable parameter like temperature."}
  ],
  "d2-3": [
    {q:"Top K is set to 1. What happens to temperature's effect on the output?", options:["Temperature has no effect — only one token is ever eligible","Temperature becomes the dominant control","Top K adjusts itself based on temperature","Temperature is applied before Top K and stays unaffected"], correct:0,
     explain:"Top K filters before sampling happens. With K=1, exactly one token survives regardless of the reshaped distribution, so temperature has nothing left to influence."},
    {q:"Which parameter's candidate pool size varies based on the shape of the probability distribution, rather than staying a fixed count?", options:["Top K","Top P","Max tokens","Stop sequences"], correct:1,
     explain:"Top P keeps adding tokens, highest-probability first, until cumulative probability crosses P — so the number of surviving tokens changes call to call, unlike Top K's fixed count."},
    {q:"At Top P = 0.8 with candidates stars (0.6), clouds (0.3), dragons (0.1), what is the nucleus?", options:["{stars} only","{stars, clouds}","{stars, clouds, dragons}","{clouds, dragons}"], correct:1,
     explain:"Stars alone (0.6) is under 0.8, so clouds is added, reaching a cumulative 0.9 — which crosses 0.8. The nucleus locks at {stars, clouds}; dragons is excluded."}
  ],
  "d2-4": [
    {q:"A team wants to evaluate an AI-generated summary against human-written reference summaries. Which metric is purpose-built for this?", options:["BLEU","ROUGE","AUC-ROC","F1 score"], correct:1,
     explain:"ROUGE was introduced specifically for summarization evaluation, comparing overlap between a generated summary and reference summaries. BLEU targets machine translation instead."},
    {q:"An automated metric scores a generated sentence poorly even though it's a perfectly good paraphrase of the reference. Which metric is most likely to score it fairly?", options:["BLEU","ROUGE","BERTScore","Plain accuracy"], correct:2,
     explain:"BERTScore compares meaning via contextual embeddings rather than exact word overlap, so it catches paraphrases that n-gram-based metrics like ROUGE and BLEU tend to penalize."}
  ]
});

/* ---------- Domain 3 ---------- */
VIDEOS.d3 = [
  {
    id: "d3-1", title: "Prompt engineering techniques that actually change model behavior",
    length: "4 min", visualType: "cards",
    visualData: { cards: [
      {key:"zero", title:"Zero-shot", desc:"No examples given, just the task."},
      {key:"few", title:"Few-shot", desc:"A handful of examples show the pattern."},
      {key:"cot", title:"Chain-of-thought", desc:"Model reasons step by step before answering."},
      {key:"tmpl", title:"Prompt template", desc:"Reusable structure with placeholders."},
      {key:"inj", title:"Prompt injection", desc:"Malicious instructions hidden in input or retrieved content."}
    ]},
    cues: [
      {text:`Prompt engineering is the cheapest lever you have — no training, no infrastructure, just how you write the input. A handful of named techniques come up constantly.`, active:[]},
      {text:`Zero-shot means asking the model to do a task with no examples at all — just a clear instruction. It works surprisingly well for tasks the model has seen plenty of during pretraining.`, active:["zero"]},
      {text:`Few-shot means giving a handful of input-output examples right in the prompt, so the model can infer the pattern you want, especially useful for a specific format or unusual task.`, active:["few"]},
      {text:`Chain-of-thought prompting asks the model to reason step by step before giving a final answer — and it measurably improves performance on anything involving multi-step logic or arithmetic.`, active:["cot"]},
      {text:`A prompt template is just a reusable structure with placeholders, so you're standardizing inputs across many calls instead of writing every prompt from scratch — useful the moment you're calling a model programmatically at scale.`, active:["tmpl"]},
      {text:`And prompt injection is the security-flavored twist worth knowing here and in Domain 5: a malicious actor embeds instructions inside user input, or inside content your system retrieves, trying to hijack the model's actual behavior.`, active:["inj"]},
      {text:`The mitigations to know by name are Bedrock Guardrails and input validation — treating anything retrieved or user-supplied as data to be reasoned about, not as instructions to blindly follow.`, active:["inj"]}
    ]
  },
  {
    id: "d3-2", title: "Prompt engineering, RAG, or fine-tuning — picking the right one",
    length: "4 min", visualType: "flow",
    visualData: { nodes: [
      {key:"prompt", label:"Prompt engineering"},
      {key:"rag", label:"RAG"},
      {key:"ft", label:"Fine-tuning"}
    ]},
    cues: [
      {text:`Three ways to shape what a foundation model does, and they sit on a real spectrum of cost and complexity.`, active:[]},
      {text:`Prompt engineering never touches the model's weights — you're just shaping behavior through how you write the input. Cheapest, fastest to iterate, and the right first move for general tasks that need no new knowledge.`, active:["prompt"]},
      {text:`RAG also never changes the model's weights — instead, it retrieves relevant information at query time and passes it alongside the prompt. It's the right call when answers need to be grounded in current, private, or frequently-changing data.`, active:["rag"]},
      {text:`Fine-tuning is the one that actually changes the model's weights, through additional training on your own data. It costs the most, but it's what you reach for when you need to teach the model a new skill, tone, or output format the base model just doesn't do well.`, active:["ft"]},
      {text:`Here's a trap worth naming directly, because it shows up often: describing "baking a company's documents into the model" as RAG. That's wrong. If the data gets incorporated by retraining or fine-tuning, that's fine-tuning — full stop.`, active:["ft"]},
      {text:`RAG only earns its name when retrieval happens at query time and the retrieved content gets passed alongside the prompt, not folded into the model's weights beforehand.`, active:["rag"]},
      {text:`So the single question that resolves this every time is: when does the data get incorporated? Before the model exists in its current form — that's fine-tuning. At the moment a user asks a question — that's RAG.`, active:["rag","ft"]}
    ]
  },
  {
    id: "d3-3", title: "RAG, from a cold start — the full query-time flow",
    length: "5 min", visualType: "flow",
    visualData: { nodes: [
      {key:"query", label:"User query"},
      {key:"embed", label:"Embed query"},
      {key:"search", label:"Vector search"},
      {key:"retrieve", label:"Retrieved chunks"},
      {key:"augment", label:"Augmented prompt"},
      {key:"gen", label:"Generated answer"}
    ]},
    cues: [
      {text:`RAG — retrieval augmented generation — is one of the most heavily tested concepts on this whole exam, and it's worth walking through the full mechanism once, slowly.`, active:[]},
      {text:`It starts with a user query, written in plain language, with no special formatting required.`, active:["query"]},
      {text:`That query gets embedded into a vector — the same embedding process we covered in Domain 2 — turning the question into a point in that high-dimensional meaning-space.`, active:["query","embed"]},
      {text:`Then a similarity search runs against a vector store, looking for the chunks of your document set whose embeddings sit closest to the query's embedding.`, active:["embed","search"]},
      {text:`The most relevant chunks come back as the retrieval result — and this is the step where retrieval quality either sets your answer up to succeed or quietly poisons it.`, active:["search","retrieve"]},
      {text:`Those retrieved chunks get inserted into the prompt alongside the original query, producing an augmented prompt — the model now has both the question and the source material to answer it from.`, active:["retrieve","augment"]},
      {text:`And that augmented prompt goes to the LLM, which generates an answer grounded in what was actually retrieved, rather than relying purely on what it learned during training.`, active:["augment","gen"]},
      {text:`On knowledge base implementation, there are four real patterns to know: traditional keyword matching for simple exact-term lookups; vector databases for the standard semantic-matching pattern we just walked through; hybrid, which combines keyword and vector scores and re-ranks; and graph RAG, which adds structure-aware traversal through a knowledge graph to pull in related chunks beyond just the closest match.`, active:["query","embed","search","retrieve","augment","gen"]},
      {text:`And the payoff worth remembering: source attribution. Because you know exactly which chunks fed the answer, you can point back to the source documents — which directly supports the transparency and explainability dimensions we'll hit in Domain 4.`, active:["retrieve","gen"]}
    ]
  },
  {
    id: "d3-4", title: "Chunking, retrieval strategy, and why RAG still hallucinates",
    length: "5 min", visualType: "cards",
    visualData: { cards: [
      {key:"fixed", title:"Fixed-size chunking", desc:"Split every N tokens — simple, can cut ideas mid-thought.", group:"Chunking strategies"},
      {key:"sem", title:"Semantic chunking", desc:"Split at natural boundaries — better meaning, variable size."},
      {key:"hier", title:"Hierarchical chunking", desc:"Multiple granularities, retrieve at the right level."},
      {key:"topk", title:"Top-k retrieval", desc:"Take the k most similar chunks.", group:"Retrieval & evaluation"},
      {key:"hybrid", title:"Hybrid search", desc:"Keyword + vector, then re-ranked."},
      {key:"rerank", title:"Re-ranking", desc:"Cheap first pass, then accurate re-scoring."},
      {key:"lost", title:"Lost in the middle", desc:"Mid-context chunks get functionally ignored."}
    ]},
    cues: [
      {text:`Getting RAG working end to end is one thing. Getting the retrieval actually good is a separate, harder problem, and it starts with how you chunk your documents.`, active:[]},
      {text:`Fixed-size chunking just splits every N tokens, often with some overlap. It's simple and predictable, but it can slice a sentence or an idea right down the middle.`, active:["fixed"]},
      {text:`Semantic chunking splits at natural boundaries instead — paragraphs, sections, topic shifts — which preserves meaning better, at the cost of variable chunk sizes that complicate embedding consistency.`, active:["sem"]},
      {text:`Hierarchical chunking goes further, chunking at multiple granularities — sentence, paragraph, section — and retrieving at whichever level actually fits the query. More complex to build, but it handles both narrow and broad questions well.`, active:["hier"]},
      {text:`There's a real tension underneath all three: smaller chunks retrieve more precisely but carry less context each; larger chunks carry more context but dilute relevance and cost more to embed. There's no universally correct size — it depends on your documents and your queries.`, active:["fixed","sem","hier"]},
      {text:`On the retrieval side: top-k retrieval just takes the k most similar chunks, and k itself is a tuning knob — too small misses context, too large adds noise and cost. Hybrid search blends keyword and vector scores and re-ranks the combined result. And re-ranking generally means retrieving a larger candidate set cheaply, then using a more accurate model to re-score and reorder before anything reaches the LLM.`, active:["topk","hybrid","rerank"]},
      {text:`Now here's the part that genuinely surprises people: RAG reduces hallucination risk, it does not eliminate it. A model can still ignore or misread context that's sitting right in front of it.`, active:[]},
      {text:`One documented reason why: "lost in the middle." Language models attend more reliably to the start and end of a long context than to content buried in the middle. Stuff ten retrieved chunks into one prompt, and the most relevant one can get functionally ignored if it lands mid-stack.`, active:["lost"]},
      {text:`Which is exactly why re-ranking matters beyond just retrieval accuracy — putting the single best chunk first or last in the prompt, not buried in position five of ten.`, active:["lost","rerank"]}
    ]
  },
  {
    id: "d3-5", title: "Bedrock Knowledge Bases, Agents, and Guardrails working together",
    length: "4 min", visualType: "flow",
    visualData: { nodes: [
      {key:"user", label:"User request"},
      {key:"agent", label:"Bedrock Agent"},
      {key:"kb", label:"Knowledge Base"},
      {key:"tool", label:"API / Lambda call"},
      {key:"guard", label:"Guardrails check"},
      {key:"resp", label:"Response"}
    ]},
    cues: [
      {text:`Three Bedrock features get tested as a set, because in a real application they usually work together.`, active:[]},
      {text:`A user request comes in — maybe "what's the status of my order and can you cancel it if it hasn't shipped."`, active:["user"]},
      {text:`A Bedrock Agent orchestrates the multi-step task this actually requires — not just answering one prompt, but chaining actions to reach a goal.`, active:["user","agent"]},
      {text:`To check order status, the agent might call a Knowledge Base — the RAG layer we just covered — to retrieve relevant account or policy information.`, active:["agent","kb"]},
      {text:`To actually cancel the order, it calls a real API or Lambda function — this is the piece that separates an agent from a plain chatbot: it can take action, not just talk.`, active:["kb","tool"]},
      {text:`Before anything reaches the user, Bedrock Guardrails checks the exchange — filtering for denied topics, harmful content, and PII, and running grounding checks — independent of which underlying model generated the response.`, active:["tool","guard"]},
      {text:`Only after that check does the final response reach the user. Two Bedrock features to keep straight: the Retrieve API returns just the chunks; RetrieveAndGenerate does retrieval, prompt augmentation, and the model call in a single step.`, active:["guard","resp"]}
    ]
  },
  {
    id: "d3-6", title: "Choosing a foundation model — the criteria that actually matter",
    length: "3 min", visualType: "cards",
    visualData: { cards: [
      {key:"cost", title:"Cost", desc:"Per-token pricing varies widely by model size."},
      {key:"lat", title:"Latency", desc:"Smaller models respond faster."},
      {key:"ctx", title:"Context window", desc:"Needed for long documents."},
      {key:"mod", title:"Modality", desc:"Text-only vs. multimodal."},
      {key:"acc", title:"Accuracy", desc:"Capability for the specific task."},
      {key:"cust", title:"Customizability", desc:"Does it support fine-tuning on Bedrock?"}
    ]},
    cues: [
      {text:`"Which model should this scenario use" is a recurring exam question shape, and it's really asking you to weigh a handful of criteria against each other.`, active:[]},
      {text:`Cost is the obvious one — per-token pricing varies widely across model sizes and providers, and it compounds fast at real usage volume.`, active:["cost"]},
      {text:`Latency matters for anything interactive — smaller models respond faster, which matters a lot more for a live chat interface than for an overnight batch job.`, active:["lat"]},
      {text:`Context window becomes the deciding factor the moment you're processing long documents — a model with too small a window simply can't see the whole input at once.`, active:["ctx"]},
      {text:`Modality is binary but important: does the task need text only, or does it need to handle images, audio, or multiple modalities together?`, active:["mod"]},
      {text:`Accuracy just means raw capability for the specific task at hand — a smaller, cheaper model might be entirely sufficient for a simple classification task where a larger model would be overkill.`, active:["acc"]},
      {text:`And customizability asks whether the model supports fine-tuning on Bedrock at all, which only matters if prompt engineering and RAG genuinely aren't enough for what you're building.`, active:["cust"]},
      {text:`No single criterion wins by default — the exam wants you weighing the actual scenario, not reaching for the biggest, most capable model out of habit.`, active:["cost","lat","ctx","mod","acc","cust"]}
    ]
  }
];

Object.assign(TOPIC_QUIZZES, {
  "d3-1": [
    {q:"A prompt gives the model three worked examples of the desired input/output format before asking it to do a new one. What technique is this?", options:["Zero-shot", "Few-shot", "Chain-of-thought", "Prompt injection"], correct:1,
     explain:"Few-shot prompting provides a handful of examples in the prompt so the model can infer the pattern, useful for unusual formats or tasks."},
    {q:"A malicious actor embeds hidden instructions inside a document that gets retrieved and passed to an LLM, trying to hijack its behavior. What is this called, and what's a named mitigation?", options:["Chain-of-thought; use more examples","Prompt injection; Bedrock Guardrails and input validation","Overfitting; more training data","Hallucination; lower the temperature"], correct:1,
     explain:"This is prompt injection — instructions smuggled into retrieved or user-supplied content. Guardrails and treating retrieved content as data, not instructions, are the standard mitigations."}
  ],
  "d3-2": [
    {q:"A company wants its support chatbot to always reflect this week's return policy, which changes often. Which approach fits best?", options:["Fine-tune weekly","RAG against a live policy document source","Raise the temperature setting","Increase max tokens"], correct:1,
     explain:"RAG retrieves current information at query time, so it stays current without retraining. Fine-tuning weekly would work but is far more expensive and still stale between runs."},
    {q:"A team retrains a model on their internal documents so the model's weights directly encode that knowledge. What is this, precisely?", options:["RAG, because the model now 'knows' the documents","Fine-tuning, because the data was incorporated by retraining, not retrieved at query time","Prompt engineering","Chain-of-thought reasoning"], correct:1,
     explain:"The distinguishing test is when the data gets incorporated. Retraining or fine-tuning on the documents is fine-tuning, regardless of how the result 'feels' to the end user."}
  ],
  "d3-3": [
    {q:"In the RAG query-time flow, what happens immediately after the user's query is embedded?", options:["The LLM generates an answer directly","A similarity search runs against a vector store","The query is sent to Bedrock Guardrails","The model is fine-tuned on the query"], correct:1,
     explain:"After embedding, a similarity search runs against the vector store to find the most relevant chunks — retrieval happens before any augmented prompt is built."},
    {q:"Which RAG knowledge base pattern adds structure-aware traversal through a knowledge graph to pull in related chunks beyond the closest match?", options:["Traditional keyword search","Vector database search","Hybrid search","Graph RAG"], correct:3,
     explain:"Graph RAG combines vector similarity with graph traversal, useful when relationships between pieces of information matter, not just raw similarity."}
  ],
  "d3-4": [
    {q:"Very large chunk sizes in a RAG ingestion pipeline tend to cause which problem?", options:["More precise retrieval but higher latency only","Diluted relevance per chunk and higher embedding cost","Guaranteed hallucination on every query","Elimination of the need for a vector database"], correct:1,
     explain:"Larger chunks carry more context but dilute relevance for any single specific query and cost more to embed. Smaller chunks trade the opposite way."},
    {q:"In a RAG pipeline stuffing 10 retrieved chunks into one prompt, what does the 'lost in the middle' effect predict?", options:["The first and last chunks are most likely to be effectively ignored","The middle chunks are most likely to be effectively ignored","All chunks are weighted equally regardless of position","Chunk order has no measurable effect"], correct:1,
     explain:"Language models tend to attend more reliably to the start and end of a long context. A relevant chunk landing mid-stack can get functionally ignored — part of why re-ranking matters."}
  ],
  "d3-5": [
    {q:"Which Bedrock Knowledge Bases API returns only the retrieved chunks, leaving prompt construction and the LLM call to the caller?", options:["RetrieveAndGenerate","Retrieve","InvokeModel","Converse"], correct:1,
     explain:"Retrieve returns just the relevant chunks. RetrieveAndGenerate does retrieval, prompt augmentation, and the LLM call in one step."},
    {q:"What's the key difference between a Bedrock Agent and a plain RAG-powered chatbot?", options:["Agents can call APIs and take real actions, not just answer questions","Agents never use a Knowledge Base","Agents don't support Guardrails","There is no meaningful difference"], correct:0,
     explain:"Bedrock Agents orchestrate multi-step tasks by calling APIs or Lambda functions to take action, going beyond answering a single prompt."}
  ],
  "d3-6": [
    {q:"A live customer-support chat interface needs fast responses above almost everything else. Which criterion should be weighted most heavily?", options:["Context window","Latency","Modality","Customizability"], correct:1,
     explain:"For an interactive, real-time interface, response speed (latency) is usually the dominant constraint — a smaller, faster model often beats a larger, slower one here."},
    {q:"A task requires analyzing lengthy 200-page contracts in a single call. Which criterion is most likely to rule out several candidate models?", options:["Modality","Context window","Cost alone","Customizability"], correct:1,
     explain:"A model with too small a context window simply can't see the whole document at once, regardless of how strong it is otherwise — context window becomes the deciding constraint."}
  ]
});

/* ---------- Domain 4 ---------- */
VIDEOS.d4 = [
  {
    id: "d4-1", title: "AWS's eight core dimensions of responsible AI",
    length: "4 min", visualType: "cards",
    visualData: { cards: [
      {key:"fair", title:"Fairness", desc:"Impacts on different groups of stakeholders."},
      {key:"exp", title:"Explainability", desc:"Understanding why a specific output happened."},
      {key:"priv", title:"Privacy & security", desc:"Appropriately obtaining and protecting data."},
      {key:"safe", title:"Safety", desc:"Preventing harmful output and misuse."},
      {key:"ctrl", title:"Controllability", desc:"Mechanisms to monitor and steer behavior."},
      {key:"ver", title:"Veracity & robustness", desc:"Correct outputs, even under adversarial input."},
      {key:"gov", title:"Governance", desc:"Org-wide processes enforcing responsible practice."},
      {key:"trans", title:"Transparency", desc:"Openness about how the system works."}
    ]},
    cues: [
      {text:`AWS names a specific set of dimensions for responsible AI, and the exam expects you fluent in the actual terminology, not just the general idea of "being careful with AI."`, active:[]},
      {text:`Fairness means considering impacts on different groups of stakeholders — making sure no group is systematically disadvantaged by how the system behaves.`, active:["fair"]},
      {text:`Explainability is about a single output: can you say why the model produced this particular prediction or response, not just the system as a whole.`, active:["exp"]},
      {text:`Privacy and security covers appropriately obtaining, using, and protecting both data and models — this is the dimension most directly tied into Domain 5's compliance material.`, active:["priv"]},
      {text:`Safety means preventing harmful output and misuse — guardrails against the system doing damage, intentionally or not.`, active:["safe"]},
      {text:`Controllability means having real mechanisms to monitor and steer the system's behavior after it's deployed, not just at design time.`, active:["ctrl"]},
      {text:`Veracity and robustness means the system keeps producing correct output reliably, including under unexpected or even adversarial input.`, active:["ver"]},
      {text:`Governance is the organizational layer — processes to define, implement, and actually enforce responsible practices across a whole company, not just one project.`, active:["gov"]},
      {text:`And transparency is openness about how the system works as a whole: what data trained it, what it's meant for, and what its limitations are.`, active:["trans"]},
      {text:`One honest caveat: AWS updates this list over time as the technology evolves, so treat eight as accurate right now rather than a permanently fixed number to memorize forever.`, active:["fair","exp","priv","safe","ctrl","ver","gov","trans"]}
    ]
  },
  {
    id: "d4-2", title: "Transparency vs. explainability — the pair that gets swapped",
    length: "3 min", visualType: "cards",
    visualData: { cards: [
      {key:"trans", title:"Transparency", desc:"Openness about the system as a whole — its data, purpose, and limits."},
      {key:"exp", title:"Explainability", desc:"Why THIS particular output happened."},
      {key:"card", title:"Model Card example", desc:"Documents training data and limitations — supports transparency."},
      {key:"shap", title:"SHAP value example", desc:"Attributes one prediction to specific input features — supports explainability."}
    ]},
    cues: [
      {text:`These two terms sound almost synonymous in casual use, but the exam treats them as genuinely distinct, and it's worth locking in the difference precisely.`, active:[]},
      {text:`Transparency is about the system as a whole. Is it clear to stakeholders what data trained it, what it's intended for, and what its limitations are? That's a property of the system, documented once, applying to every output it ever produces.`, active:["trans"]},
      {text:`Explainability is about one single output. Can you say why the model produced this particular prediction, right here, right now? That's a property of an individual decision, not the system in general.`, active:["exp"]},
      {text:`A model card is the clean example of transparency in practice — structured documentation of a model's intended use, training data, and known limitations, published once and applying broadly.`, active:["trans","card"]},
      {text:`A SHAP value attached to one specific prediction is the clean example of explainability — it attributes that particular output to specific input features, for that one case.`, active:["exp","shap"]},
      {text:`Here's a nice bridge back to Domain 3: RAG's source-attribution feature is a genuinely practical explainability mechanism. It lets you trace one specific answer back to the specific documents that produced it.`, active:["exp"]},
      {text:`So the quick test if a question tries to swap these: does it describe the system in general, or one specific output? General description, documented once — transparency. Justification for one particular answer — explainability.`, active:["trans","exp"]}
    ]
  },
  {
    id: "d4-3", title: "Where bias actually comes from, and AWS's tools for catching it",
    length: "4 min", visualType: "cards",
    visualData: { cards: [
      {key:"hist", title:"Historical / data bias", desc:"Training data reflects past discriminatory patterns.", group:"Sources of bias"},
      {key:"samp", title:"Sampling bias", desc:"Training data doesn't represent the real population."},
      {key:"meas", title:"Measurement bias", desc:"How a feature was labeled favors one outcome."},
      {key:"algo", title:"Algorithmic bias", desc:"The model amplifies patterns already in the data."},
      {key:"clarify", title:"SageMaker Clarify", desc:"Detects bias, generates explainability reports.", group:"AWS tooling"},
      {key:"cards", title:"Model Cards", desc:"Documents intended use and limitations."}
    ]},
    cues: [
      {text:`Bias doesn't come from one place — it's worth being able to name where in the pipeline a specific bias actually originated, because the fix is different depending on the source.`, active:[]},
      {text:`Historical or data bias happens when the training data itself reflects past discriminatory patterns — historical hiring data that favored one group, for instance, teaches the model that same pattern.`, active:["hist"]},
      {text:`Sampling bias is different: it's when the training data simply doesn't represent the real-world population the model will actually encounter — an underrepresented group the model just hasn't seen enough examples of.`, active:["samp"]},
      {text:`Measurement bias creeps in through how a feature was measured or labeled in the first place — the label itself systematically favors one outcome before the model ever sees the data.`, active:["meas"]},
      {text:`And algorithmic bias is the model or the optimization process itself amplifying patterns that were already present in the data — the training process making a small skew larger.`, active:["algo"]},
      {text:`On tooling: SageMaker Clarify is the name to know. It detects statistical bias in both training datasets and deployed models, and generates feature-attribution explainability reports — connecting straight back to the fairness and explainability dimensions.`, active:["clarify"]},
      {text:`Model Cards operationalize transparency specifically — documented intended use, training data, and limitations. And AWS publishes its own AI Service Cards for services like Rekognition and Comprehend, doing the same thing at the service level.`, active:["cards"]}
    ]
  }
];

Object.assign(TOPIC_QUIZZES, {
  "d4-1": [
    {q:"A company publishes documentation describing a model's training data, intended use cases, and known limitations. Which responsible AI dimension does this primarily support?", options:["Explainability","Transparency","Controllability","Safety"], correct:1,
     explain:"Transparency is about the system as a whole being openly documented — training data, purpose, and limitations, applying to every output the system produces."},
    {q:"Which dimension is about having real mechanisms to monitor and steer an AI system's behavior after deployment?", options:["Governance","Controllability","Veracity and robustness","Fairness"], correct:1,
     explain:"Controllability specifically means having mechanisms to monitor and steer AI system behavior, distinct from governance (org-wide process) or robustness (reliability under adversarial input)."}
  ],
  "d4-2": [
    {q:"A SHAP value is generated explaining why a specific loan application was denied. Which dimension does this best illustrate?", options:["Transparency","Explainability","Governance","Safety"], correct:1,
     explain:"Explainability concerns a single output — why this specific decision was made — which is exactly what a SHAP value attached to one prediction provides."},
    {q:"A published model card documents a model's training data and known limitations for all stakeholders. Which dimension does this primarily support?", options:["Explainability","Transparency","Controllability","Veracity"], correct:1,
     explain:"A model card documents the system as a whole, once, applying to every output — that's transparency, not explainability of one specific decision."}
  ],
  "d4-3": [
    {q:"A resume-screening model trained mostly on resumes from one demographic performs worse for underrepresented applicants. What kind of bias is this?", options:["Measurement bias","Sampling bias","Algorithmic bias","Label bias"], correct:1,
     explain:"The training data doesn't represent the real-world population the model will see — that's sampling bias, distinct from bias in how a feature was measured or introduced by the learning algorithm."},
    {q:"Which AWS tool detects statistical bias in a training dataset and a deployed model, and generates feature-attribution explanations?", options:["SageMaker Clarify","Bedrock Guardrails","Amazon Macie","AWS Config"], correct:0,
     explain:"SageMaker Clarify is built specifically for bias detection (pre- and post-training) and explainability reporting. Guardrails is a runtime content filter; Macie discovers sensitive data; Config tracks configuration changes."}
  ]
});

/* ---------- Domain 5 ---------- */
VIDEOS.d5 = [
  {
    id: "d5-1", title: "Shared responsibility and securing an AI workload",
    length: "4 min", visualType: "cards",
    visualData: { cards: [
      {key:"aws-infra", title:"Physical infrastructure", desc:"Data centers, host security.", group:"AWS's responsibility"},
      {key:"aws-serve", title:"Model-serving infrastructure", desc:"The managed Bedrock/SageMaker platform itself."},
      {key:"iam", title:"IAM policies", desc:"Who can invoke a model or read training data.", group:"Your responsibility"},
      {key:"enc", title:"Encryption choices", desc:"At rest and in transit, via KMS and TLS."},
      {key:"data", title:"What you send the model", desc:"Data classification and what gets exposed."},
      {key:"trail", title:"CloudTrail auditing", desc:"Who invoked which model, when."}
    ]},
    cues: [
      {text:`The shared responsibility model isn't new to AI, but it's worth re-drawing the line specifically for AI workloads, because it's exactly where exam scenarios like to test the boundary.`, active:[]},
      {text:`AWS is responsible for security of the cloud: the physical data centers, host security, and the underlying model-serving infrastructure for services like Bedrock and SageMaker.`, active:["aws-infra","aws-serve"]},
      {text:`Everything past that line is yours: security in the cloud. That means IAM policies scoping exactly who can invoke a model or read training data, following least privilege.`, active:["iam"]},
      {text:`It means your encryption choices — data encrypted at rest via KMS, and TLS for every API call in transit — plus VPC endpoints if you want that traffic off the public internet entirely.`, active:["enc"]},
      {text:`And critically, it means what you actually send the model. AWS secures the infrastructure; it can't stop you from sending sensitive data to a model that shouldn't see it — that classification decision is entirely yours.`, active:["data"]},
      {text:`CloudTrail logs every API call, including exactly who invoked which model and when — it's the backbone of both governance and incident investigation if something does go wrong.`, active:["trail"]},
      {text:`Amazon Macie discovers and classifies sensitive data at rest in S3, and Amazon Comprehend's PII detection can find and redact PII in text — including right inside a RAG ingestion pipeline, before anything ever gets embedded.`, active:["data","trail"]}
    ]
  },
  {
    id: "d5-2", title: "GDPR — the regulation this exam actually names",
    length: "4 min", visualType: "cards",
    visualData: { cards: [
      {key:"lawful", title:"Lawfulness & transparency", desc:"Core principle, Article 5."},
      {key:"purpose", title:"Purpose limitation", desc:"Data used only for its stated purpose."},
      {key:"min", title:"Data minimization", desc:"Collect only what's necessary."},
      {key:"erase", title:"Right to erasure", desc:"Article 17 — the 'right to be forgotten.'", group:"Rights relevant to AI"},
      {key:"auto", title:"Automated decisions", desc:"Article 22 — restricts solely-automated decisions."},
      {key:"port", title:"Data portability", desc:"Article 20 — reuse data across services."},
      {key:"dpia", title:"DPIA", desc:"Article 35 — required before high-risk processing."}
    ]},
    cues: [
      {text:`If an exam scenario names a specific privacy regulation, it's almost certainly this one. The General Data Protection Regulation took effect in May 2018, and it governs processing of personal data for EU residents — regardless of where the organization processing it is actually based.`, active:[]},
      {text:`Article 5 lays out the core principles: lawfulness, fairness, and transparency; purpose limitation, meaning data collected for one stated purpose can't silently get reused for another; data minimization, collecting only what's necessary; and accountability — you have to be able to demonstrate compliance, not just claim it.`, active:["lawful","purpose","min"]},
      {text:`Now, the rights that matter specifically for AI and ML systems, because they get genuinely hard to honor once a model exists. Article 17, the right to erasure — often called the right to be forgotten — lets someone demand their data be deleted. Genuinely difficult once that data has been used to train or fine-tune a model.`, active:["erase"]},
      {text:`Article 22 restricts decisions with legal or similarly significant effects made without meaningful human involvement — including automated profiling. This is the one that connects directly back to explainability from Domain 4: if a model's decision has real consequences, someone needs to be able to explain it.`, active:["auto"]},
      {text:`Article 20 covers data portability — individuals can obtain and reuse their own data across services. And Article 35 requires a Data Protection Impact Assessment before high-risk processing — and a meaningful share of generative AI deployments qualify as high-risk.`, active:["port","dpia"]},
      {text:`If GDPR shows up as a distractor-heavy question, it's almost always testing whether you know which specific article grants which specific right — worth reading Articles 5, 17, 22, and 35 directly if this is a weak spot.`, active:["erase","auto","port","dpia"]}
    ]
  },
  {
    id: "d5-3", title: "Model governance, and securing a multi-tenant RAG system",
    length: "4 min", visualType: "flow",
    visualData: { nodes: [
      {key:"query", label:"User query"},
      {key:"filter", label:"Ownership metadata filter"},
      {key:"search", label:"Vector search (scoped)"},
      {key:"chunks", label:"Permitted chunks only"},
      {key:"resp", label:"Response"}
    ]},
    cues: [
      {text:`Two governance ideas close out Domain 5: keeping track of models over their lifecycle, and a specific, testable pattern for securing RAG when multiple customers share one system.`, active:[]},
      {text:`On lifecycle governance: SageMaker Model Registry versions and catalogs models, tracking lineage from data to deployed artifact. Model Cards document intended use and limitations. CloudTrail and CloudWatch together give you an audit trail and monitoring for drift or unusual invocation patterns. And AWS Config tracks configuration changes to AI resources over time for compliance auditing.`, active:[]},
      {text:`Now, the scenario that comes up constantly: a multi-tenant RAG chatbot has to guarantee Customer A's queries never surface Customer B's documents. Where should that actually be enforced?`, active:["query"]},
      {text:`Not as an afterthought in the final prompt, hoping the model behaves. The enforcement has to happen earlier, right at the vector search itself.`, active:["query","filter"]},
      {text:`A metadata filter, scoped to the requesting user's owned or permitted documents, gets applied during the vector search — before any chunk becomes a retrieval candidate at all.`, active:["filter","search"]},
      {text:`That means only permitted chunks ever come back as candidates, regardless of how similar an unauthorized chunk might otherwise have scored.`, active:["search","chunks"]},
      {text:`And only then does a response get generated — built exclusively from content the requesting user actually had rights to see in the first place. This is the standard pattern behind any multi-tenant RAG system, and it's the answer whenever a scenario asks how to prevent cross-customer data leakage.`, active:["chunks","resp"]}
    ]
  }
];

Object.assign(TOPIC_QUIZZES, {
  "d5-1": [
    {q:"In the shared responsibility model, who is responsible for the physical security of the data centers running a managed foundation model?", options:["The customer","AWS","Both equally, split by workload","Neither — it's outsourced to a third party"], correct:1,
     explain:"AWS is responsible for security 'of' the cloud — physical infrastructure and host security. The customer remains responsible for security 'in' the cloud."},
    {q:"Which AWS service is purpose-built to discover and classify sensitive data at rest in S3?", options:["Amazon Macie","Amazon Comprehend","AWS Config","SageMaker Clarify"], correct:0,
     explain:"Amazon Macie discovers and classifies sensitive data, including PII, stored in S3. Comprehend's PII detection works on text content directly, often earlier in a pipeline."}
  ],
  "d5-2": [
    {q:"Under GDPR, which article grants an individual the right to have their personal data deleted?", options:["Article 5","Article 17","Article 22","Article 35"], correct:1,
     explain:"Article 17 is the 'right to erasure,' often called the right to be forgotten. Article 5 covers core principles, Article 22 covers automated decision-making, Article 35 covers DPIAs."},
    {q:"GDPR Article 22 primarily restricts which of the following?", options:["Any use of personal data whatsoever","Decisions with legal or similarly significant effects made without meaningful human involvement","Storing data outside the EU","Real-time model inference generally"], correct:1,
     explain:"Article 22 gives individuals the right not to be subject to a decision based solely on automated processing — including profiling — when it produces legal or similarly significant effects."}
  ],
  "d5-3": [
    {q:"A multi-tenant RAG chatbot must ensure Customer A's queries never surface Customer B's documents. Where should this be enforced?", options:["Only through instructions in the final LLM prompt","As a metadata filter applied during the vector search itself","In Bedrock Guardrails only","It's unnecessary if the data is encrypted at rest"], correct:1,
     explain:"Ownership enforcement is a retrieval-time filtering concern: a metadata filter scoped to the requesting user's documents, applied during the vector search, so unauthorized chunks never become candidates."},
    {q:"Which tool tracks model versioning and lineage from data to deployed artifact?", options:["SageMaker Model Registry","AWS Config","Amazon Macie","Bedrock Guardrails"], correct:0,
     explain:"SageMaker Model Registry versions and catalogs models, tracking lineage — the core tool for lifecycle governance of deployed models."}
  ]
});

/* ============================================================
   GAP-CLOSING ADDITIONS — aligned to official exam guide v1.1
   (published April 30, 2026), covering agentic AI and related
   objectives not in the original 20-video build.
   ============================================================ */

/* ---------- Domain 1 addition ---------- */
VIDEOS.d1.push({
  id: "d1-5", title: "Agentic AI — the newest branch on the family tree",
  length: "4 min", visualType: "flow",
  visualData: { nodes: [
    {key:"ai", label:"AI"},
    {key:"ml", label:"ML"},
    {key:"dl", label:"Deep Learning"},
    {key:"genai", label:"Generative AI"},
    {key:"agentic", label:"Agentic AI"}
  ]},
  cues: [
    {text:`Back in Domain 1's first video we drew a nesting chain: AI contains machine learning, which contains deep learning, which contains generative AI. There's a fifth branch worth adding now, and it showed up on the exam guide very recently: agentic AI.`, active:["ai","ml","dl","genai"]},
    {text:`Generative AI is reactive — it waits for a prompt and produces content: text, an image, a block of code. Agentic AI is what you get when you wrap a generative model in a loop that lets it perceive, reason, and take actions toward a goal, with much less step-by-step human direction.`, active:["genai","agentic"]},
    {text:`AWS's own framing is useful here: agentic systems sit on a spectrum of how much agency they're given, not a strict yes-or-no category. At the low end are LLM-augmented workflows — mostly deterministic code, with an LLM making one or two decisions along the way, like classifying a document and routing it down the correct path.`, active:["agentic"]},
    {text:`At the high end are autonomous agents, built around what's called a ReAct loop — reason and act. The agent gets a goal, a system prompt describing that goal, and a list of tools, then it loops: reason about what to do, call a tool, read the result, reason again, until it decides it's done.`, active:["agentic"]},
    {text:`In practice, most production systems land somewhere in between — hybrids that combine a planning step with a queue of smaller ReAct agents working through a task list, which can scale using the same auto-scaling and async patterns as any other distributed system.`, active:["agentic"]},
    {text:`AWS's own guidance is worth remembering as a design principle, not just trivia: only increase an agent's agency when the task complexity actually requires it. A simple document router doesn't need full autonomy — that just adds risk without adding value.`, active:["agentic"]},
    {text:`Two more pieces of vocabulary from the current exam guide worth locking in. Inferencing comes in four flavors: batch, for large jobs processed together; real-time, for immediate single responses; asynchronous, for longer jobs you check back on; and serverless, where infrastructure scales to zero between requests.`, active:[]},
    {text:`Training data itself gets categorized too — labeled versus unlabeled, and by structure: tabular, time-series, image, text, structured, or unstructured. Matching data type to technique is part of what "identify the correct AI/ML technique for a use case" actually tests.`, active:[]},
    {text:`Last thing worth saying plainly: AI/ML isn't always the right tool. If a situation needs one guaranteed, specific, deterministic outcome — not a prediction with some error rate — that's a signal to reach for traditional software logic instead, weighing the cost of building an ML solution against the value it actually adds.`, active:[]}
  ]
});

Object.assign(TOPIC_QUIZZES, { "d1-5": [
  {q:"Which best describes agentic AI compared to generative AI?", options:["Agentic AI only creates content; generative AI takes actions","Generative AI is reactive and creates content; agentic AI wraps a model in a loop to perceive, reason, and act toward a goal","They are identical terms for the same concept","Agentic AI requires no foundation model at all"], correct:1,
   explain:"Generative AI reacts to a prompt to produce content. Agentic AI adds a loop of perception, reasoning, and action toward a goal, with less step-by-step human direction."},
  {q:"A document-routing system uses an LLM only to classify incoming documents as simple or complex, then follows deterministic code paths. What kind of agentic system is this?", options:["An autonomous agent using a ReAct loop","An LLM-augmented workflow with low agency","Not an agentic system at all","A hybrid plan-and-solve system"], correct:1,
   explain:"This is a mostly deterministic system with an LLM making one narrow decision — AWS's framing calls this an LLM-augmented workflow: still agentic, but with minimal agency."},
  {q:"A batch job processes 10,000 records overnight, submitted together and returned as one completed set. Which type of inferencing is this?", options:["Real-time","Asynchronous","Batch","Serverless"], correct:2,
   explain:"Batch inferencing processes a large set of inputs together rather than responding to individual requests immediately."}
]});

/* ---------- Domain 2 addition ---------- */
VIDEOS.d2.push({
  id: "d2-5", title: "Context engineering, token pricing, and AWS's newest GenAI stack",
  length: "4 min", visualType: "flow",
  visualData: { nodes: [
    {key:"sys", label:"System prompt"},
    {key:"retrieved", label:"Retrieved context"},
    {key:"tools", label:"Tool outputs"},
    {key:"memory", label:"Memory"},
    {key:"model", label:"Model"}
  ]},
  cues: [
    {text:`Prompt engineering is about writing one good instruction. Context engineering is the bigger discipline that's grown up around it: deciding everything that goes into the model's context window on a given call, not just the wording of the ask.`, active:["sys"]},
    {text:`That context window typically gets assembled from several sources at once. A system prompt sets the role and rules.`, active:["sys"]},
    {text:`Retrieved context — the chunks a RAG pipeline pulled back — gets added next.`, active:["sys","retrieved"]},
    {text:`If the model called a tool, the tool's output gets folded in too.`, active:["sys","retrieved","tools"]},
    {text:`And memory — anything the system is carrying over from earlier turns or earlier sessions — rounds it out, before all of it goes to the model in one call.`, active:["sys","retrieved","tools","memory"]},
    {text:`Managing all of that well is context engineering: keeping the window focused on what's actually relevant, in the right order, without drowning the model in noise — which connects straight back to the "lost in the middle" problem from Domain 3.`, active:["sys","retrieved","tools","memory","model"]},
    {text:`Now, cost. Foundation models are billed on a token-based pricing model — you pay for input tokens and output tokens, usually at different rates, with output tokens typically pricier since they cost more to generate. A longer, denser context window directly drives up cost on every single call, which is exactly why context engineering isn't just a quality concern, it's a cost concern too.`, active:[]},
    {text:`Last piece: AWS's GenAI service names have shifted fast, and it's worth having the current ones straight. Amazon Q's business-assistant side has evolved into Amazon Quick — an agentic workspace for business users. Kiro is AWS's agentic IDE, built around "spec-driven development." Strands Agents is AWS's open-source SDK for actually building agents in code. All three, plus Amazon Bedrock AgentCore, show up by name in the current exam guide — we'll go one level deeper on AgentCore specifically in the next domain.`, active:[]}
  ]
});

Object.assign(TOPIC_QUIZZES, { "d2-5": [
  {q:"What does 'context engineering' add on top of prompt engineering?", options:["Nothing — they are the same thing","Deciding everything that goes into the context window — system prompt, retrieved content, tool outputs, and memory — not just the wording of one instruction","A requirement to always use RAG","A specific sampling parameter setting"], correct:1,
   explain:"Context engineering is the broader discipline of assembling everything that goes into a model's context window on a given call, of which prompt wording is only one piece."},
  {q:"Under a token-based pricing model, what typically happens to cost as context windows get longer and denser?", options:["Cost stays fixed regardless of context length","Cost decreases, since bulk requests are discounted","Cost increases, since both input and output tokens are billed","Only output length affects cost, never input"], correct:2,
   explain:"Token-based pricing bills for input and output tokens, so a longer, denser context window directly increases cost on every call."},
  {q:"Which AWS product is described as AWS's agentic IDE built around spec-driven development?", options:["Amazon Quick","Kiro","Strands Agents","Bedrock AgentCore"], correct:1,
   explain:"Kiro is AWS's agentic IDE, distinguished by producing requirements, a design, and a task list before writing any code."}
]});

/* ---------- Domain 3 additions ---------- */
VIDEOS.d3.push({
  id: "d3-7", title: "Agentic AI in depth — MCP, Bedrock AgentCore, Strands, and Kiro",
  length: "5 min", visualType: "cards",
  visualData: { cards: [
    {key:"mcp", title:"Model Context Protocol", desc:"Open standard connecting agents to tools.", group:"How an agent talks to tools"},
    {key:"runtime", title:"AgentCore Runtime", desc:"Hosts and executes the agent, with session isolation.", group:"Bedrock AgentCore components"},
    {key:"gateway", title:"AgentCore Gateway", desc:"Turns APIs and Lambda functions into MCP tools."},
    {key:"identity", title:"AgentCore Identity", desc:"Authentication and credentials for non-human agents."},
    {key:"memory", title:"AgentCore Memory", desc:"Retains context across a session or between sessions."},
    {key:"strands", title:"Strands Agents", desc:"AWS's open-source SDK for building agents in code.", group:"Building & running agents"},
    {key:"kiro", title:"Kiro", desc:"AWS's agentic IDE, built on spec-driven development."}
  ]},
  cues: [
    {text:`Every agent eventually needs to call outside tools — a database, an API, a file system — and before late 2024 that meant a custom integration for every single agent-to-tool pairing. The Model Context Protocol, MCP, fixes that.`, active:["mcp"]},
    {text:`MCP is an open standard with a client-server shape: an MCP client lives inside the agent application, an MCP server exposes a tool or data source, and they talk through one consistent interface. Instead of N agents each needing their own connector to M tools — an N-times-M problem — every tool implements MCP once, and every agent can use it. N plus M, not N times M.`, active:["mcp"]},
    {text:`On AWS specifically, Amazon Bedrock AgentCore is the managed platform for actually running agents in production, made of several named pieces worth knowing individually. Runtime hosts and executes the agent itself, with session isolation.`, active:["runtime"]},
    {text:`Gateway turns your existing APIs and Lambda functions into MCP-compatible tools an agent can discover and call, without writing a custom wrapper for each one.`, active:["gateway"]},
    {text:`Identity is the piece built specifically for the fact that agents aren't human — it manages agent identities and credentials so an agent can securely act on a user's behalf, or access AWS and third-party services with its own verified identity.`, active:["identity"]},
    {text:`And Memory gives an agent a way to retain context across a session, or across sessions entirely, instead of starting from zero on every single call.`, active:["memory"]},
    {text:`Two more names worth knowing. Strands Agents is AWS's open-source SDK for actually writing agents in code — a lightweight, model-driven agent loop where you mainly define a prompt and a list of tools, and the model itself drives the reasoning.`, active:["strands"]},
    {text:`And Kiro is AWS's agentic IDE, built on a different philosophy than a typical AI coding assistant: spec-driven development. Instead of jumping straight to code, Kiro has the agent write requirements, then a design, then a task list first — and those documents stay in the repo as a real source of truth while the agent works through the tasks.`, active:["kiro"]}
  ]
});

VIDEOS.d3.push({
  id: "d3-8", title: "Prompt risks, model customization tradeoffs, and grading with an LLM judge",
  length: "5 min", visualType: "cards",
  visualData: { cards: [
    {key:"exposure", title:"Exposure", desc:"A system prompt or sensitive instruction leaks into the response.", group:"Named prompt risks"},
    {key:"poisoning", title:"Poisoning", desc:"Malicious content enters training or retrieved data."},
    {key:"hijacking", title:"Hijacking", desc:"Injected instructions redirect the model off-task."},
    {key:"jailbreaking", title:"Jailbreaking", desc:"Safety guardrails are circumvented for refused output."}
  ]},
  cues: [
    {text:`We covered prompt injection back in Domain 3's first video as one general risk. The current exam guide actually names four distinct prompt risks, and it's worth being able to tell them apart.`, active:[]},
    {text:`Exposure is a system prompt or other sensitive instruction leaking out into the visible response — information that was meant to stay behind the scenes.`, active:["exposure"]},
    {text:`Poisoning means malicious or corrupted content gets into the data the model relies on — training data, fine-tuning data, or content a RAG pipeline retrieves — so the damage is baked in before the user ever asks a question.`, active:["poisoning"]},
    {text:`Hijacking is redirecting the model off its intended task using injected instructions — the classic "ignore your previous instructions and do this instead," whether it comes from the user directly or from content the model retrieves.`, active:["hijacking"]},
    {text:`And jailbreaking specifically means working around the model's safety guardrails to get output it was designed to refuse.`, active:["jailbreaking"]},
    {text:`Shifting topics: Amazon Bedrock Prompt Management is the console feature for treating prompts like real, versioned assets instead of throwaway text — variables written in double curly braces, immutable numbered versions you can roll back to, and side-by-side comparison between versions before you deploy one.`, active:[]},
    {text:`On model customization, the exam guide now names five approaches on one cost spectrum. Pre-training from scratch, at one end, is the most expensive by far. Continued pre-training adds more unlabeled domain data to an existing model. Fine-tuning adds labeled, task-specific data. In-context learning — which is really just what few-shot prompting is doing — costs nothing extra at training time, since it's just examples placed directly in the prompt. And model distillation trains a smaller "student" model to mimic a larger "teacher" model's behavior, trading some capability for a real cut in cost and latency.`, active:[]},
    {text:`Last piece: LLM-as-a-judge. Instead of a human rating every single output, a separate, usually stronger LLM scores responses against your criteria — accuracy, tone, whether it followed instructions. It scales far better than human evaluation, though it's not a perfect substitute for it, especially on the most nuanced judgment calls.`, active:[]}
  ]
});

Object.assign(TOPIC_QUIZZES, {
  "d3-7": [
    {q:"What core problem does the Model Context Protocol (MCP) solve?", options:["The N-times-M integration problem, by letting every tool and every agent implement one standard once","The problem of models being too slow at inference","The lack of GPU capacity for training","Token-based pricing being too expensive"], correct:0,
     explain:"Without a shared standard, N agents connecting to M tools need N×M custom integrations. MCP standardizes the interface so it becomes N+M — one implementation per tool, one per agent."},
    {q:"Which Bedrock AgentCore component is purpose-built to manage authentication and credentials for non-human, agent identities?", options:["AgentCore Gateway","AgentCore Identity","AgentCore Memory","AgentCore Runtime"], correct:1,
     explain:"AgentCore Identity is specifically designed for the fact that agents aren't human — it manages agent identities and credentials for secure access."},
    {q:"A developer wants to write an agent in Python with a lightweight, model-driven agent loop, defining just a prompt and a list of tools. Which AWS offering fits?", options:["Kiro","Amazon Quick","Strands Agents","AWS Config"], correct:2,
     explain:"Strands Agents is AWS's open-source SDK specifically for building agents in code with a model-driven agent loop."}
  ],
  "d3-8": [
    {q:"A user manipulates an AI application into revealing its hidden system prompt in the visible response. Which named prompt risk is this?", options:["Poisoning","Exposure","Hijacking","Jailbreaking"], correct:1,
     explain:"Exposure specifically refers to a system prompt or other sensitive instruction leaking into the visible output."},
    {q:"Malicious content is inserted into a document that a RAG pipeline will later retrieve and pass to the model. Which named prompt risk is this?", options:["Jailbreaking","Exposure","Poisoning","Hijacking"], correct:2,
     explain:"Poisoning means malicious or corrupted content enters data the model relies on — training data, fine-tuning data, or retrieved content — before a user ever asks anything."},
    {q:"A team trains a smaller model to mimic a larger model's behavior in order to cut cost and latency. What FM customization approach is this?", options:["Fine-tuning","In-context learning","Model distillation","Continued pre-training"], correct:2,
     explain:"Model distillation trains a smaller 'student' model to reproduce a larger 'teacher' model's behavior, trading some capability for lower cost and latency."}
  ]
});

/* ---------- Domain 4 addition ---------- */
VIDEOS.d4.push({
  id: "d4-4", title: "Environmental cost, legal risk, and what makes a dataset trustworthy",
  length: "4 min", visualType: "cards",
  visualData: { cards: [
    {key:"ip", title:"IP infringement claims", desc:"Output can resemble copyrighted training material.", group:"Legal risks of GenAI"},
    {key:"biased", title:"Biased outputs", desc:"Discriminatory output can be a legal, not just ethical, problem."},
    {key:"trust", title:"Loss of customer trust", desc:"A visible AI failure damages the brand relationship."},
    {key:"enduser", title:"End-user risk", desc:"Real harm to whoever relies on the output."},
    {key:"halluc", title:"Hallucinations", desc:"Confidently wrong answers someone acts on."}
  ]},
  cues: [
    {text:`Two objectives got added to Domain 4 recently that don't get much airtime elsewhere: picking a model responsibly with the planet in mind, and naming the real legal exposure generative AI creates.`, active:[]},
    {text:`On the responsible side: model size and training compute have a real environmental cost, and AWS's guidance is to weigh that explicitly — sometimes the responsible choice is the smaller, more efficient model that's good enough for the task, not the biggest one available.`, active:[]},
    {text:`On legal risk, the exam guide names five specific exposures worth knowing individually, not just "AI can be risky" in the abstract.`, active:[]},
    {text:`Intellectual property infringement claims — a model's output can resemble copyrighted material it was trained on closely enough to create real legal exposure.`, active:["ip"]},
    {text:`Biased model outputs — output that discriminates or disadvantages a group can itself be a legal, not just an ethical, problem, especially in regulated domains like lending or hiring.`, active:["biased"]},
    {text:`Loss of customer trust — a visible AI failure damages a brand relationship in a way that's hard to fully undo.`, active:["trust"]},
    {text:`End-user risk — real harm to the person actually relying on the output, from bad medical information to a bad financial decision made on AI advice.`, active:["enduser"]},
    {text:`And hallucinations themselves carry legal exposure whenever a confidently wrong answer leads someone to act on false information.`, active:["halluc"]},
    {text:`Last piece: dataset characteristics. The exam guide wants you able to name what makes a training dataset trustworthy — inclusivity and diversity of the population it represents, curated sources rather than scraped-and-hoped, and balance across the categories or groups the model will need to treat fairly.`, active:[]}
  ]
});

Object.assign(TOPIC_QUIZZES, { "d4-4": [
  {q:"A company's chatbot output closely resembles copyrighted text it was trained on. What legal risk category does this represent?", options:["Loss of customer trust","Intellectual property infringement claims","End-user risk","Environmental impact"], correct:1,
   explain:"Output resembling copyrighted material closely enough to create legal exposure is an intellectual property infringement risk — one of the named legal risks of GenAI."},
  {q:"Which factor does AWS's guidance say should influence responsible model selection, beyond accuracy and cost?", options:["The model's release date only","Environmental and sustainability considerations","The number of parameters only","Marketing popularity"], correct:1,
   explain:"AWS guidance names environmental and sustainability considerations as a legitimate factor in responsible model selection — sometimes a smaller, efficient model is the more responsible choice."}
]});

/* ---------- Domain 5 addition ---------- */
VIDEOS.d5.push({
  id: "d5-4", title: "Securing agentic AI, and the Generative AI Security Scoping Matrix",
  length: "5 min", visualType: "cards",
  visualData: { cards: [
    {key:"s1", title:"Scope 1", desc:"A consumer app with embedded GenAI you don't control.", group:"The Generative AI Security Scoping Matrix"},
    {key:"s2", title:"Scope 2", desc:"An enterprise app with embedded GenAI, under a business agreement."},
    {key:"s3", title:"Scope 3", desc:"Your own app, built on an existing third-party FM via API."},
    {key:"s4", title:"Scope 4", desc:"Customizing an existing FM with your own data."},
    {key:"s5", title:"Scope 5", desc:"Training an entirely new FM from scratch on your data."}
  ]},
  cues: [
    {text:`AWS publishes a named framework specifically for scoping GenAI security work, and it's worth knowing by name and structure: the Generative AI Security Scoping Matrix — five scopes running from least to most control, and responsibility.`, active:[]},
    {text:`Scope 1 is a consumer app with GenAI baked in that you don't control at all — think a public chatbot you just use.`, active:["s1"]},
    {text:`Scope 2 is an enterprise application with an embedded GenAI feature, under a business agreement that usually adds real data protections.`, active:["s2"]},
    {text:`Scope 3 is where a lot of real building happens: your own application, built on an existing third-party foundation model through an API — a support chatbot using RAG on top of a Bedrock model is the textbook Scope 3 example.`, active:["s3"]},
    {text:`Scope 4 is customizing an existing foundation model with your own data, through fine-tuning or continued pre-training — you now control the customized model itself, not just the application around it.`, active:["s4"]},
    {text:`And Scope 5 is training an entirely new foundation model from scratch on your own data — full control, and full responsibility, over every layer.`, active:["s5"]},
    {text:`The higher the scope number, the more your organization directly controls — and the more of the security burden shifts onto you rather than the model provider. AWS has since published a related Agentic AI Security Scoping Matrix, extending the same idea specifically to autonomous agents.`, active:[]},
    {text:`On the agent-specific security side: Bedrock AgentCore Identity handles authentication for the agent itself, and Policy in AgentCore lets you scope exactly which tools and actions a given agent is allowed to use — the least-privilege principle from this domain's first video, applied to a non-human identity.`, active:[]},
    {text:`And on output quality: hallucination detection and grounding techniques are now their own named objective — RAG grounding to tie answers back to real sources, output validation to check a response against rules before it ships, and confidence scoring to flag low-certainty answers for review rather than presenting them as fact.`, active:[]},
    {text:`Rounding out the governance toolkit: alongside Config and CloudTrail, the current guide adds AWS Inspector for vulnerability scanning, AWS Artifact for on-demand access to AWS's own compliance reports, and AWS Trusted Advisor for automated best-practice checks across your account.`, active:[]}
  ]
});

Object.assign(TOPIC_QUIZZES, { "d5-4": [
  {q:"A company builds its own support chatbot using RAG on top of an existing foundation model accessed via the Bedrock API. Which scope of the Generative AI Security Scoping Matrix is this?", options:["Scope 1","Scope 2","Scope 3","Scope 5"], correct:2,
   explain:"Scope 3 covers building your own application on top of an existing third-party foundation model accessed via API — the textbook example is a RAG-based chatbot on Bedrock."},
  {q:"A company fine-tunes an existing foundation model on its own labeled data. Which scope of the Generative AI Security Scoping Matrix applies?", options:["Scope 2","Scope 3","Scope 4","Scope 5"], correct:2,
   explain:"Scope 4 covers customizing an existing FM with your own data through fine-tuning or continued pre-training — you now control the customized model itself."},
  {q:"Which AgentCore feature lets an administrator scope exactly which tools and actions a specific agent is allowed to use?", options:["AgentCore Memory","Policy in AgentCore","AgentCore Browser","AgentCore Code Interpreter"], correct:1,
   explain:"Policy in AgentCore applies least-privilege access control to an agent, scoping exactly which tools and actions it's permitted to use."}
]});
