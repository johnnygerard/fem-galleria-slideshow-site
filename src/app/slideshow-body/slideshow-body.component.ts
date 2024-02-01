import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { paintings } from '../paintings';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IMAGEKIT_ENDPOINT } from '../imagekit.config';
import { Painting } from '../../types/painting.class';
import { HyphenPipe } from '../hyphen.pipe';

@Component({
  selector: 'app-slideshow-body',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    HyphenPipe,
  ],
  templateUrl: './slideshow-body.component.html',
  styleUrl: './slideshow-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowBodyComponent implements OnInit {
  readonly MOBILE_HEIGHT = 280;
  painting = Painting.null;
  @Input() slug = '';

  ngOnInit(): void {
    const painting = paintings.get(this.slug);
    if (painting === undefined)
      throw Error(`Painting "${this.slug}" not found`);

    this.painting = painting;
  }

  get isMobile(): boolean {
    return innerWidth < 768;
  }

  // Triggers change detection (required with OnPush strategy)
  @HostListener('window:resize')
  onResize(): void { }

  get baseImgSrc(): string {
    return `${IMAGEKIT_ENDPOINT}/${this.painting.imgName}`;
  }

  get imgSrc(): string {
    return this.baseImgSrc + '?tr=h-' + this.MOBILE_HEIGHT;
  }

  get imgSrcset(): string {
    return [1, 2, 3].map(dpr => this.#getSrcsetCandidate(dpr)).join(', ');
  }

  #getSrcsetCandidate(dpr: number): string {
    const height = Math.round(this.MOBILE_HEIGHT * dpr);

    return `${this.baseImgSrc}?tr=h-${height} ${dpr}x`;
  }
}
