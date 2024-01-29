import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  template: '<p>dummy works!</p>',
  standalone: true,
})
class DummyComponent { }

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
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
