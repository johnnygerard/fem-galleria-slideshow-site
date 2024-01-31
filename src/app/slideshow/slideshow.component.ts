import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideshowBodyComponent } from '../slideshow-body/slideshow-body.component';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [
    HeaderComponent,
    SlideshowBodyComponent,
  ],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowComponent {
  @Input() slug = '';
}
