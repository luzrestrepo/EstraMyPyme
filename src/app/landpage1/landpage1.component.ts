import { Component  } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landpage1',
  standalone: true,
  imports: [Landpage1Component,RouterOutlet,RouterModule, InfoComponent, CommonModule],
  templateUrl: './landpage1.component.html',
  styleUrl: './landpage1.component.css',
  
})

export class Landpage1Component {   
  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  showButtons: boolean = true;

  private hideButtonsRoutes: string[] = [
    '/user/book',
    '/user/dashboard1',
    '/user/settings',
    '/user/charts'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      this.showButtons = !this.hideButtonsRoutes.includes(currentUrl);
    });
  }
}
