import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ LoginComponent,FormsModule,LoginComponent,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMesage: string = '';

  constructor(private authservice: AuthService,private router: Router){
    
  }


  login() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    let isLogin = false;

    try {
      isLogin = this.authservice.login(this.username, this.password);
      if (isLogin) {
        this.router.navigate(['/home']);
      } else {
        this.errorMesage = 'Nombre de usuario o contraseña incorrecto';
      }
    } catch (error) {
      console.log(error);
      this.errorMesage = (error as any).message;
    }
  }

}

  

  
