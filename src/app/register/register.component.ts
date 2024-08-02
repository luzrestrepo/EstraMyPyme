import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { passwordConfirmValidator } from '../shared/password-confirm-directive';
import { Router, RouterModule } from '@angular/router';
import { User } from '../models/user.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      persona: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [Validators.required]),
      terms: new FormControl(false),
    },
    { validators: passwordConfirmValidator }
  );

  constructor (private userService: UsersService, private router: Router){


  }

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  register() {
    this.userService.addUser(this.registerForm.value as User)
    console.log(this.registerForm.value);
    this.router.navigate(['/login'])
  }
}