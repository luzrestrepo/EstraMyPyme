import { Component } from '@angular/core';
import { Header1Component } from '../header1/header1.component';
import { Header2Component } from '../header2/header2.component';
import { Header3Component } from '../header3/header3.component';
import { FooterComponent } from '../footer/footer.component';
import { TextComponent } from '../main/text/text.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header1Component,
    Header2Component,
    Header3Component,
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
