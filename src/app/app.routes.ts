import { Routes } from '@angular/router';
import { Landpage1Component } from './landpage1/landpage1.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/landpage1', pathMatch: 'full' },
  { path: 'landpage1', component: Landpage1Component }
];