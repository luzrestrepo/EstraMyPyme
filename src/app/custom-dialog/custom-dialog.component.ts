import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css'],
})
export class CustomDialogComponent {
  @Input() title: string = '';
  @Input() visible: boolean = false;
  @Input() dialogType: 'update-password' | 'add-company' = 'update-password';

  @Output() submit = new EventEmitter<void>(); // Emite un evento cuando se envía el formulario

  close() {
    this.visible = false;
  }
}
