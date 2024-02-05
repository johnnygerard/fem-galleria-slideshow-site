import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { paintingResolver } from './painting.resolver';
import { slideshowTitleResolver } from './slideshow-title.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { animationState: 'homePage' },
    title: 'galleria. | Home',
    component: HomeComponent
  },
  {
    path: 'slideshow/:slug',
    data: { animationState: 'slideshowPage' },
    resolve: { paintingIndex: paintingResolver },
    title: slideshowTitleResolver,
    component: SlideshowComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
