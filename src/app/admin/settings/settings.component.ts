import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  companies = [
    { name: 'Material XD Version' },
    { name: 'Fix Platform Errors' },
    { name: 'Progress Track' }
  ];

  profileCreationErrors = [
    'Error en la creación del perfil 1',
    'Error en la creación del perfil 2'
  ];

  changePassword() {
    if (this.passwordData.newPassword === this.passwordData.confirmPassword) {
      console.log('Contraseña cambiada:', this.passwordData);
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }

  updateCompanies() {
    console.log('Empresas actualizadas:', this.companies);
  }

  addCompany() {
    this.companies.push({ name: '' });
  }

  removeCompany(index: number) {
    this.companies.splice(index, 1);
  }

  clearProfileErrors() {
    this.profileCreationErrors = [];
  }
}