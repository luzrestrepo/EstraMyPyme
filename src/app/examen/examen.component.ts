import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.css'
})
export class ExamenComponent {
  registerForm = new FormGroup({
    documento: new FormControl('', [Validators.required]),
  });

  currentPage: number = 1;

  constructor(private router: Router) { }

  goToPage(pageNumber: number): void {
    if (pageNumber > 3) {
      this.router.navigate(['/register']); // Redirigir a /register
    } else {
      this.currentPage = pageNumber; // Cambiar a la página solicitada
    }
  }

  isCurrentPage(pageNumber: number): boolean {
    return this.currentPage === pageNumber;
  }

  finalizarTest(): void {
    alert('Test finalizado con éxito. ¡Te invitamos a regístrate en la página para conocer tus resultados!');
  }
}