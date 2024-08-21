import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

export const canDeactivateGuard: CanDeactivateFn<RegisterComponent> = (component, currentRoute, currentState, nextState) => {
  // Verifica si el formulario está sucio (tiene cambios no guardados)
  if (component.registerForm.dirty && !component.submitted) {
    return confirm('Tienes cambios no guardados. ¿Seguro que quieres salir?');
  }
  return true;
};