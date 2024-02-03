import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideshowBodyComponent } from '../slideshow-body/slideshow-body.component';
import { SlideshowFooterComponent } from '../slideshow-footer/slideshow-footer.component';
import { Painting } from '../../types/painting.class';
import { paintings } from '../paintings';
import { ActivatedRoute, Router } from '@angular/router';

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

    scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  @HostListener('body:keydown.ArrowLeft')
  navigateToPreviousPainting() {
    const previous = this.painting.previous?.slug;

    if (previous) this.#navigateToPainting(previous);
  }

  @HostListener('body:keydown.ArrowRight')
  navigateToNextPainting() {
    const next = this.painting.next?.slug;

    if (next) this.#navigateToPainting(next);
  }

  #navigateToPainting(slug: string) {
    this._router.navigate(['..', slug], { relativeTo: this._route });
  }
}
