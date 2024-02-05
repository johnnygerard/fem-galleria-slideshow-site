import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { IMAGE_LOADER } from '@angular/common';
import { customImageKitLoader } from './imagekit.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AnimationRouteReuseStrategy } from './animation-route-reuse-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    {
      provide: IMAGE_LOADER,
      useValue: customImageKitLoader
    },
    {
      provide: RouteReuseStrategy,
      useClass: AnimationRouteReuseStrategy
    },
  ]
};
