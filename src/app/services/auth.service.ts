import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private usersService: UsersService) {}

  login(username: string, password: string) {
    const user = this.usersService.findUser(username);
    
    if (!user || user.password !== password) {
      throw new Error('Usuario o contraseña incorrectos');
    }
    
    return true;
  }
}


  

