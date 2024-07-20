import { Component  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-landpage1',
  standalone: true,
  imports: [Landpage1Component,RouterOutlet,RouterModule],
  templateUrl: './landpage1.component.html',
  styleUrl: './landpage1.component.css',
  
})

export class Landpage1Component {   
}
