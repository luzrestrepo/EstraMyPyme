import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users = [
    { name: 'Juan Pérez', email: 'juan.perez@example.com', role: 'Estudiante', empresa: 'Material XD Version' },
    { name: 'María López', email: 'maria.lopez@example.com', role: 'Profesor', empresa: 'Fix Platform Errors' },
    { name: 'Carlos Gómez', email: 'carlos.gomez@example.com', role: 'Profesor', empresa: 'Progress Track' },
    { name: 'Carolina Sanchez', email: 'carolina.sanchez@example.com', role: 'Profesor', empresa: 'Launch our Mobile App' },
    { name: 'Andrea Rodriguez', email: 'andres.rodriguez@example.com', role: 'Estudiante', empresa: 'Add the New Pricing Page' },
  ];

  newUser = { name: '', email: '', role: '', empresa: '' };
  showModal = false;
  filterRole = '';
  filterEmpresa = '';

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.showModal = !this.showModal;
  }

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.role && this.newUser.empresa) {
      this.users.push({ ...this.newUser });
      this.newUser = { name: '', email: '', role: '', empresa: '' };
      this.showModal = false;
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  filteredUsers() {
    return this.users.filter(user => {
      return (!this.filterRole || user.role === this.filterRole) &&
             (!this.filterEmpresa || user.empresa === this.filterEmpresa);
    });
  }

  get uniqueEmpresas() {
    return [...new Set(this.users.map(user => user.empresa))];
  }
}