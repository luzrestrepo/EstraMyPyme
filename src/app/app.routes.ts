import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TextComponent } from './main/text/text.component';

export const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'text', component: TextComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
