import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUsername: string | null = null; // Para almacenar el nombre de usuario
  private readonly USERNAME_KEY = 'currentUsername'; // Clave para localStorage

  constructor(private usersService: UsersService) {}

  login(username: string, password: string): boolean {
    const user = this.usersService.findUser(username);
    
    if (!user || user.password !== password) {
      throw new Error('Usuario o contraseña incorrectos');
    }

    this.setUsername(username); // Establece el nombre de usuario
    return true;
  }

  isAdmin(username: string, password: string): boolean {
    return username === 'admin' && password === '123456';
  }

  setUsername(username: string) {
    this.currentUsername = username;
    localStorage.setItem(this.USERNAME_KEY, username); // Almacena el nombre de usuario en localStorage
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY); // Recupera el nombre de usuario de localStorage
  }

  logout() {
    this.currentUsername = null;
    localStorage.removeItem(this.USERNAME_KEY); // Elimina el nombre de usuario de localStorage
  }

  // Método para actualizar la contraseña
  updatePassword(currentPassword: string, newPassword: string): boolean {
    const username = this.getUsername();

    if (!username) {
      throw new Error('Usuario no autenticado');
    }

    const user = this.usersService.findUser(username);

    if (!user || user.password !== currentPassword) {
      throw new Error('Contraseña actual incorrecta');
    }

    user.password = newPassword;
    this.usersService.updateUser(user); // Actualiza el usuario en el UsersService
    return true;
  }
}
