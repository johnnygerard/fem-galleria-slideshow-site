import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { paintings } from '../paintings';
import { CommonModule, NgOptimizedImage } from '@angular/common';

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
  imgName = '';
  @Input() slug = '';
  resolutions = [
    { width: 327, height: 280 }, // Mobile
    { width: 475, height: 560 }, // Tablet/Desktop
  ];

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
}
