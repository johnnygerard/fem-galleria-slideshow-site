import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { LogoSvgComponent } from '../svg/logo-svg.component';
import { RouterModule } from '@angular/router';
import { paintings } from '../paintings';
import { Painting } from '../../types/painting.class';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    LogoSvgComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input({ transform: booleanAttribute }) slideshow = false;

  get label() {
    return `${this.slideshow ? 'Stop' : 'Start'} slideshow`;
  }

  get route(): string {
    return this.slideshow ? '/' : this.#firstPainting.link;
  }

  get #firstPainting(): Painting {
    return paintings.values().next().value;
  }
}
