import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import Masonry from 'masonry-layout';
import { paintings } from '../paintings';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements AfterViewInit {
  images: {
    name: string;
    width: number;
    height: number;
  }[];

  constructor(private _host: ElementRef) {
    this.images = paintings.map(painting => {
      const { resolution, title } = painting;
      const name = title.toLowerCase().replaceAll(' ', '-') + '.png';
      const width = resolution[0];
      const height = resolution[1];

      return { name, width, height };
    });
  }

  ngAfterViewInit(): void {
    new Masonry(this._host.nativeElement, {
      itemSelector: '.masonry-item',
      columnWidth: '.column-sizer',
      gutter: '.gutter-sizer',
    });
  }
}
