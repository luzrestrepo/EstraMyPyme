import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ LoginComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMesage: string = '';

  constructor(private authservice: AuthService,private router: Router){
    
  }

  login(form: any) {
    
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    let islogin= false

    try{
      islogin = this.authservice.login(this.username, this.password)
    } catch(error){
      console.log(error)
      this.errorMesage =(error as any). message
    }
    
    if(islogin){
      this.router.navigateByUrl('/footer')
    }
    
  }


  register() {
    this.router.navigate(['/register']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToHome() {
    this.router.navigate(['/footer']);
  }
  

  
}
