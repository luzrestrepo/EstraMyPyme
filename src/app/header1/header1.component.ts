import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header1',
  standalone: true,
  imports: [RouterOutlet, RouterModule, InfoComponent, CommonModule],
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.css',
})
export class Header1Component {
  isDropdownVisible: boolean = false;
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

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollToTopBtn) {
      scrollToTopBtn.style.display = scrollPosition > 200 ? 'block' : 'none';
    }

    const nav = document.querySelector('nav');
    if (window.scrollY > 3000) {
      nav?.classList.add('scrolled4');
      nav?.classList.remove('scrolled scrolled2 scrolled3');
    } else if (window.scrollY > 2150) {
      nav?.classList.add('scrolled3');
      nav?.classList.remove('scrolled scrolled2');
    } else if (window.scrollY > 1450) {
      nav?.classList.add('scrolled2');
      nav?.classList.remove('scrolled');
    } else if (window.scrollY > 400) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled scrolled2 scrolled3 scrolled4');
    }
  }

  // Función que desplaza la página hacia arriba
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}