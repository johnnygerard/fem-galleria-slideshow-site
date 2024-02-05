import { trigger, transition, query, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('homePage <=> slideshowPage', [
        query(':leave', [
          animate('.6s ease', style({ opacity: 0 }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  constructor(private _nestedOutlets: ChildrenOutletContexts) { }

  get routeAnimationState(): string | undefined {
    const primary = this._nestedOutlets.getContext('primary');

    return primary?.route?.snapshot.data['animationState'];
  }
}
