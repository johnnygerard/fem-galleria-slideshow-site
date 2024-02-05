import { trigger, transition, query, style, animate, group, animation, useAnimation } from '@angular/animations';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, Data, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

const SLIDESHOW_TIMINGS = '.6s ease';
const slideshowAnimation = animation([
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'fixed',
      width: '100%'
    })
  ]),
  group([
    query(':leave', [
      animate(SLIDESHOW_TIMINGS, style({ transform: 'translateX({{ leave }}100%)' }))
    ]),
    query(':enter', [
      style({ transform: 'translateX({{ enter }}100%)' }),
      animate(SLIDESHOW_TIMINGS, style({ transform: 'translateX(0%)' }))
    ])
  ])
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('homePage => slideshowPage', [
        query(':leave', [
          animate('.5s ease', style({ opacity: 0 }))
        ])
      ]),
      transition('slideshowPage => homePage', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s ease', style({ opacity: 1 }))
        ])
      ])
    ]),
    trigger('slideshow', [
      transition(':increment', [
        useAnimation(slideshowAnimation, { params: { leave: '-', enter: '' } })
      ]),
      transition(':decrement', [
        useAnimation(slideshowAnimation, { params: { leave: '', enter: '-' } })
      ])
    ])
  ]
})
export class AppComponent {
  constructor(private _nestedOutlets: ChildrenOutletContexts) { }

  get activatedRoute(): ActivatedRoute | null | undefined {
    return (this._nestedOutlets.getContext('primary'))?.route;
  }

  get data$(): Observable<Data> | undefined {
    return this.activatedRoute?.data;
  }

  get routeAnimationState(): string | undefined {
    return this.activatedRoute?.snapshot.data['animationState'];
  }
}
