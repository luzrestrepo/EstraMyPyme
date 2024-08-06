import { Component } from '@angular/core';
import { Landpage1Component } from '../landpage1/landpage1.component';
import { FooterComponent } from '../footer/footer.component';
import { TextComponent } from '../main/text/text.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Landpage1Component,
    FooterComponent,
    TextComponent,
    RouterModule,
    InfoComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
