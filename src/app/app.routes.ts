import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Landpage1Component } from './landpage1/landpage1.component';
import { TextComponent } from './main/text/text.component';

export const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'text', component: TextComponent },
  { path: 'footer', component: FooterComponent },

  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landpage1', component: Landpage1Component }
];
