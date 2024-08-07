import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'] 
})
export class UserSettingsComponent implements OnInit {
  isUserProfileFormVisible = false;
  isNotificationsFormVisible = false;
  isSecurityFormVisible = false;

  notificationSettings = {
    email: false,
    sms: false,
    push: false
  };

  userProfile = {
    email: '',
    name: '',
    phone: ''
  };

  securitySettings = {
    changePassword: false,
    twoFactorAuth: false,
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  constructor(private authservice: AuthService) {} 

  showUserProfileForm() {
    this.isUserProfileFormVisible = !this.isUserProfileFormVisible;
  }

  showNotificationsForm() {
    this.isNotificationsFormVisible = !this.isNotificationsFormVisible;
  }

  showSecurityForm() {
    this.isSecurityFormVisible = !this.isSecurityFormVisible;
  }

  saveNotifications() {
    // Guardar los cambios en localStorage
    localStorage.setItem('notificationSettings', JSON.stringify(this.notificationSettings));
    console.log('Preferencias de notificaciones guardadas:', this.notificationSettings);
    
    // Cerrar el formulario de notificaciones
    this.isNotificationsFormVisible = false;
  }
// Método para guardar los datos del perfil de usuario
saveUserProfile() {
  // Guardar los datos en localStorage
  localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
  console.log('Perfil de usuario guardado:', this.userProfile);

  // Cerrar el formulario
  this.isUserProfileFormVisible = false;
}
  saveSecurity() {
    if (this.securitySettings.newPassword !== this.securitySettings.confirmNewPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      // Usar AuthService para actualizar la contraseña
      this.authservice.updatePassword(
        this.securitySettings.currentPassword,
        this.securitySettings.newPassword
      );

      // Guardar otras preferencias de seguridad en localStorage
      localStorage.setItem('securitySettings', JSON.stringify({
        changePassword: this.securitySettings.changePassword,
        twoFactorAuth: this.securitySettings.twoFactorAuth
      }));
      console.log('Preferencias de seguridad guardadas:', this.securitySettings);

      // Cerrar el formulario de seguridad
      this.isSecurityFormVisible = false;
    } catch (error) {
      alert((error as Error).message);
    }
  }

  ngOnInit() {
    // Cargar las preferencias desde localStorage si existen
    const savedNotificationSettings = localStorage.getItem('notificationSettings');
    if (savedNotificationSettings) {
      this.notificationSettings = JSON.parse(savedNotificationSettings);
    }

    const savedSecuritySettings = localStorage.getItem('securitySettings');
    if (savedSecuritySettings) {
      this.securitySettings = JSON.parse(savedSecuritySettings);
    }
  }
}
