import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LogoSvgComponent } from '../svg/logo-svg.component';
import { RouterModule } from '@angular/router';
import { paintings } from '../paintings';

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
  @Input() slideshow = false;

  get label() {
    return `${this.slideshow ? 'Stop' : 'Start'} slideshow`;
  }

  get route(): string {
    return this.slideshow ? '/' : `/slideshow/${this.firstTitleSlug}`;
  }

  get firstTitleSlug() {
    return paintings[0].title.toLowerCase().replaceAll(' ', '-');
  }
}
