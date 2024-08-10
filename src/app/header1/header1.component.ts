import { Component, HostListener  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';


@Component({  
  selector: 'app-header1',
  standalone: true,
  imports: [Header1Component,RouterOutlet,RouterModule, InfoComponent],
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.css',
  
})

export class Header1Component {  


  currentSectionIndex = 0;
  sections: NodeListOf<Element>;

  constructor() {
    this.setupScrollArrow();
    this.sections = document.querySelectorAll('.scroll-section');
  }

  setupScrollArrow() {
    const scrollArrow = document.getElementById('scroll-arrow');

    if (scrollArrow) {
      scrollArrow.addEventListener('click', () => this.scrollToNextSection());
    }
  }

  scrollToNextSection() {
    if (this.sections.length > 0) {
      this.currentSectionIndex = (this.currentSectionIndex + 1) % this.sections.length;
      const targetSection = this.sections[this.currentSectionIndex];
      (targetSection as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }

   
  isDropdownVisible: boolean = false;
  title = 'scroll-to-top'

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > 200) {
      scrollToTopBtn!.style.display = 'block';
    } else {
      scrollToTopBtn!.style.display = 'none';
    }

    const nav = document.querySelector('nav');
    if (window.scrollY > 400) {
      nav?.classList.add('scrolled');
    } if (window.scrollY > 1450) {
      nav?.classList.add('scrolled2')
    } if (window.scrollY > 2150) {
      nav?.classList.add('scrolled3')
    } if (window.scrollY > 3000) {
      nav?.classList.add('scrolled4')
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
