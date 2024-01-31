import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideImageKitLoader } from '@angular/common';

const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/jgerard/fem-galleria-slideshow-site';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideImageKitLoader(IMAGEKIT_ENDPOINT),
  ]
};
