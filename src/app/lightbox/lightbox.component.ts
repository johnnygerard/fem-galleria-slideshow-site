import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Painting } from '../../types/painting.class';
import { IMAGEKIT_ENDPOINT } from '../imagekit.config';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightboxComponent {
  @Input() painting!: Painting;
  dialogIsOpen = false;

  showModal(dialog: HTMLDialogElement) {
    this.dialogIsOpen = true;
    dialog.showModal();
  }

  getSrc(dpr: number = 1): string {
    // For simplicity, I use the full viewport for the image max resolution.
    // This is suboptimal but hard to optimize.
    const width = innerWidth * dpr;
    const height = innerHeight * dpr;
    const query = `tr=w-${width},h-${height},c-at_max`;

    return `${IMAGEKIT_ENDPOINT}/${this.painting.imgName}?${query}`;
  }

  get srcset(): string {
    return [1, 2, 3].map(dpr => `${this.getSrc(dpr)} ${dpr}x`).join(', ');
  }

  get alt(): string {
    return `${this.painting.title} by ${this.painting.artist}`;
  }
}
