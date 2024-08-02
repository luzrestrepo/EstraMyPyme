import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users = [
    { name: 'Juan Pérez', email: 'juan.perez@example.com', role: 'Admin' },
    { name: 'María López', email: 'maria.lopez@example.com', role: 'User' },
    { name: 'Carlos Gómez', email: 'carlos.gomez@example.com', role: 'Editor' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
