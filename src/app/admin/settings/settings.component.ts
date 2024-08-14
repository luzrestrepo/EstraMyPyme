import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomDialogComponent } from '../../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CustomDialogComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  @ViewChild('passwordDialog') passwordDialog!: CustomDialogComponent;
  @ViewChild('companiesDialog') companiesDialog!: CustomDialogComponent;

  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  companies = signal([
    { name: 'Material XD Version' },
    { name: 'Fix Platform Errors' },
    { name: 'Progress Track' },
  ]);

  profileCreationErrors = signal([
    'Error en la creación del perfil 1',
    'Error en la creación del perfil 2',
  ]);

  openPasswordDialog() {
    this.passwordDialog.visible = true;
  }

  closePasswordDialog() {
    this.passwordDialog.visible = false;
  }

  openCompaniesDialog() {
    this.companiesDialog.visible = true;
  }

  closeCompaniesDialog() {
    this.companiesDialog.visible = false;
  }

  changePassword() {
    if (this.passwordData.newPassword === this.passwordData.confirmPassword) {
      console.log('Contraseña cambiada:', this.passwordData);
      this.closePasswordDialog();
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }

  updateCompanies() {
    console.log('Empresas actualizadas:', this.companies());
    this.closeCompaniesDialog();
  }

  addCompany() {
    this.companies.update((companies) => [...companies, { name: '' }]);
  }

  removeCompany(index: number) {
    this.companies.update((companies) =>
      companies.filter((_, i) => i !== index)
    );
  }

  clearProfileErrors() {
    this.profileCreationErrors.set([]);
  }
}
