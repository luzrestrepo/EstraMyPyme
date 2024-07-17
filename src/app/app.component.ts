import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { TextComponent } from "./main/text/text.component";

import { LoginComponent } from './login/login.component';
import { Landpage1Component } from "./landpage1/landpage1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, LoginComponent, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Estrapyme';
}
