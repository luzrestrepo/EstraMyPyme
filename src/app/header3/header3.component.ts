import { Component  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';


@Component({
  selector: 'app-header3',
  standalone: true,
  imports: [Header3Component,RouterOutlet,RouterModule, InfoComponent],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.css',
  
})

export class Header3Component {   
  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
