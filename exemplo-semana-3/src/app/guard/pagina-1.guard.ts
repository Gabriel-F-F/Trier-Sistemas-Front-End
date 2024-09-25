import { CanActivateFn } from '@angular/router';

export const pagina1Guard: CanActivateFn = (route, state) => {
  return false;
};
