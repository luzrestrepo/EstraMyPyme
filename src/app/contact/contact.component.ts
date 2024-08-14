import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  loading = false;
  success = false;

  onSubmit() {
    this.loading = true;
    this.success = false;

    // Simulando una solicitud de envío con un retraso de 2 segundos
    setTimeout(() => {
      this.loading = false;
      this.success = true;

      // Reiniciar el formulario si es necesario
      // Puedes hacer esto usando ViewChild para acceder al formulario
    }, 2000);
  }
}