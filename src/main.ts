import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appProviders = [importProvidersFrom(BrowserAnimationsModule)];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...appConfig.providers, ...appProviders],
}).catch((err: any) => console.error(err));
