import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'slideshow/:slug',
    component: SlideshowComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
