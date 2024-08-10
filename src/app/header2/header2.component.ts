import { Component  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';


@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [Header2Component,RouterOutlet,RouterModule, InfoComponent],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css',
  
})

export class Header2Component {   
  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
