import { Component , ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { TextComponent } from "./main/text/text.component";

import { LoginComponent } from './login/login.component';
import { Landpage1Component } from "./landpage1/landpage1.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, LoginComponent, TextComponent, RegisterComponent, Landpage1Component, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Estrapyme';
}
