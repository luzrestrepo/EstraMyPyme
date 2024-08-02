import { ApplicationConfig,provideZoneChangeDetection } from '@angular/core';
import { provideRouter, } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration (),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
};
