import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TextComponent } from './main/text/text.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Landpage1Component } from './landpage1/landpage1.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { SettingsComponent } from './admin/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    LoginComponent,
    TextComponent,
    RegisterComponent,
    Landpage1Component,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    UsersComponent,
    SettingsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'Estrapyme';
  isAdmin = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAdmin = event.url.startsWith('/admin');
        console.log('isAdmin:', this.isAdmin); // Verifica el valor en la consola
      }
    });
  }
}
