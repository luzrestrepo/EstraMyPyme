import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [TextComponent,RouterModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {

}
