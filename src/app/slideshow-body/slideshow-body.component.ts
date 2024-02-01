import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { paintings } from '../paintings';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IMAGEKIT_ENDPOINT } from '../imagekit.config';

@Component({
  selector: 'app-slideshow-body',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './slideshow-body.component.html',
  styleUrl: './slideshow-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowBodyComponent implements OnInit {
  readonly MOBILE_HEIGHT = 280;
  imgName = '';
  @Input() slug = '';

  ngOnInit(): void {
    const painting = paintings.get(this.slug);
    if (painting === undefined)
      throw Error(`Painting "${this.slug}" not found`);

    this.imgName = painting.imgName;
  }

  get isMobile(): boolean {
    return innerWidth < 768;
  }

  // Triggers change detection (required with OnPush strategy)
  @HostListener('window:resize')
  onResize(): void { }

  get baseImgSrc(): string {
    return `${IMAGEKIT_ENDPOINT}/${this.imgName}`;
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
