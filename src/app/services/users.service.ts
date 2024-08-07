import { Injectable } from '@angular/core';
import { User } from '../models/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  users: User [] = []
  constructor() { }

  addUser(user: User) {
    this.users.push (user)
  }

  findUser(username: string){
    return this.users.find((user) => user.username === username)
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.username === updatedUser.username);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }
}
