import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { ChartComponent } from './admin/charts/charts.component';
import { UserLayoutComponent } from './users-view/user-layout/user-layout.component';
import { UserDashboardComponent } from './users-view/user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './users-view/user-settings/user-settings.component';
import { UserChartsComponent } from './users-view/user-charts/user-charts.component';
import { BookComponent } from './users-view/book/book.component';
import { ExamenComponent } from './examen/examen.component'; 
import { canDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canDeactivate: [canDeactivateGuard] },
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/settings', component: SettingsComponent },
  { path: 'admin/charts', component: ChartComponent },
  {
    path: 'user', component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: 'book', pathMatch: 'full' },
      { path: 'book', component: BookComponent },
      { path: 'dashboard1', component: UserDashboardComponent },
      { path: 'settings', component: UserSettingsComponent },
      { path: 'charts', component: UserChartsComponent },
    ]
  },
  { path: 'examen', component: ExamenComponent } 
];
