import { Component  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';


@Component({
  selector: 'app-landpage1',
  standalone: true,
  imports: [Landpage1Component,RouterOutlet,RouterModule, InfoComponent],
  templateUrl: './landpage1.component.html',
  styleUrl: './landpage1.component.css',
  
})

export class Landpage1Component {   
  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
