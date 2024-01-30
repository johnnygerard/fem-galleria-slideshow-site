import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import Masonry from 'masonry-layout';
import { paintings } from '../paintings';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements AfterViewInit {
  masonry?: Masonry;
  paintings = paintings;

  constructor(private _host: ElementRef) { }

  ngAfterViewInit(): void {
    this.masonry = new Masonry(this._host.nativeElement, {
      // Masonry options: https://masonry.desandro.com/options
      itemSelector: '.masonry-item',
      columnWidth: '.column-sizer',
      gutter: '.gutter-sizer',
      fitWidth: true, // Allows horizontal centering
    });
  }

  get width(): number {
    return 324;
  }

  getHeight(resolution: [number, number]): number {
    const [width, height] = resolution;

    return Math.round(height / width * this.width);
  }

  toSlug(title: string): string {
    return title.toLowerCase().replaceAll(' ', '-');
  }
}
