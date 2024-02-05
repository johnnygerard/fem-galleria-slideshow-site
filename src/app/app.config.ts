import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { IMAGE_LOADER } from '@angular/common';
import { customImageKitLoader } from './imagekit.config';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: IMAGE_LOADER,
      useValue: customImageKitLoader
    },
    provideAnimations(),
  ]
};
