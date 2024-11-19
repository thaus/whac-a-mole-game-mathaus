import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { GameEffects } from './store/whac-a-mole.effects';
import { gameReducer } from './store/whac-a-mole.reducer';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('./whac-a-mole.component')).WhacAMoleComponent,
    providers: [
      provideState({ name: 'game', reducer: gameReducer }),
      provideEffects(GameEffects),
    ],
  },
];
