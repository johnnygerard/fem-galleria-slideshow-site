import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Painting } from '../../types/painting.class';
import { CommonModule } from '@angular/common';
import { MediaButtonComponent } from '../media-button/media-button.component';
import { paintings } from '../paintings';

@Component({
  selector: 'app-slideshow-footer',
  standalone: true,
  imports: [
    CommonModule,
    MediaButtonComponent,
  ],
  templateUrl: './slideshow-footer.component.html',
  styleUrl: './slideshow-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowFooterComponent implements OnChanges {
  progress = 0;
  @Input({ required: true }) painting!: Painting;

  ngOnChanges(): void {
    this.progress = (this.painting.index + 1) / paintings.size;
  }
}
