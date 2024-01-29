import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  template: '<p>dummy works!</p>',
  standalone: true,
})
class DummyComponent { }

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DummyComponent // TODO: HomeComponent
  },
  {
    path: 'slideshow/:title',
    component: DummyComponent // TODO: SlideshowComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
