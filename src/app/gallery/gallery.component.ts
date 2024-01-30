import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import Masonry from 'masonry-layout';
import { paintings } from '../paintings';
import type { Image } from '../../types/image';
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
  images: Image[] = paintings.map(painting => {
    const { resolution, title } = painting;
    const slug = title.toLowerCase().replaceAll(' ', '-');

    return {
      link: '/slideshow/' + slug,
      name: slug + '.png',
      width: resolution[0],
      height: resolution[1],
    };
  });

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

  computeHeight(image: Image, width: number): number {
    return Math.round(image.height / image.width * width);
  }
}
