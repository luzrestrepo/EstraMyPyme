import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMesage: string = '';

  constructor(private authservice: AuthService, private router: Router) {}

  login() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    try {
      if (this.authservice.isAdmin(this.username, this.password)) {
        this.router.navigate(['/admin']);
      } else if (this.authservice.login(this.username, this.password)) {
        this.router.navigate(['/user']);
      } else {
        this.errorMesage = 'Nombre de usuario o contraseña incorrecto';
      }
    } catch (error) {
      console.log(error);
      this.errorMesage = (error as any).message;
    }
  }
}
