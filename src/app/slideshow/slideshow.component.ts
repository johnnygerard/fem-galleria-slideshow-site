import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideshowBodyComponent } from '../slideshow-body/slideshow-body.component';
import { SlideshowFooterComponent } from '../slideshow-footer/slideshow-footer.component';
import { Painting } from '../../types/painting.class';
import { paintings } from '../paintings';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [
    HeaderComponent,
    SlideshowBodyComponent,
    SlideshowFooterComponent,
  ],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideshowComponent {
  painting!: Painting;

  // Route parameter: /slideshow/:slug
  @Input({ required: true })
  set slug(value: string) {
    const painting = paintings.get(value);

    if (painting) this.painting = painting;
    else throw Error(`Painting "${value}" not found`);
  }
}
