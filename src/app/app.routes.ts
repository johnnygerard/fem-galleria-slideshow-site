import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { animationState: 'homePage' },
    component: HomeComponent
  },
  {
    path: 'slideshow/:slug',
    data: { animationState: 'slideshowPage' },
    component: SlideshowComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
