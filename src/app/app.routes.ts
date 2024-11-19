import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./features/whac-a-mole/whac-a-mole.routes')).routes,
  },
];
