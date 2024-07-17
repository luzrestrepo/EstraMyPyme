import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { Landpage1Component } from "./landpage1/landpage1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, RouterLink, LoginComponent, Landpage1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Estrapyme';
}
