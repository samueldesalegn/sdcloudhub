import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  cardFlipped = signal(false);
  copiedField = signal<'email' | 'phone' | null>(null);

  toggleCardFlip(): void {
    this.cardFlipped.update((v) => !v);
  }

  copyCardField(text: string, field: 'email' | 'phone'): void {
    navigator.clipboard?.writeText(text).then(() => {
      this.copiedField.set(field);
      setTimeout(() => this.copiedField.set(null), 1800);
    });
  }

  downloadVCard(): void {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Tumdedo;Samuel;;;',
      'FN:Samuel Tumdedo',
      'TITLE:Senior Data & Cloud Engineer',
      'ORG:SD Cloud Hub',
      'TEL;TYPE=CELL:+12028553721',
      'EMAIL:samuel@sdcloudhub.com',
      'URL:https://sdcloudhub.com',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'samuel-tumdedo.vcf';
    link.click();
    URL.revokeObjectURL(url);
  }
}
