import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isDarkMode = signal<boolean>(false);

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    }

    document.body.classList.toggle('dark', this.isDarkMode());
  }

  toggleDarkMode() {
    this.isDarkMode.update((value) => !value);

    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    document.body.classList.toggle('dark', this.isDarkMode());
  }
}
