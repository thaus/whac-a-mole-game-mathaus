import { createAction, props } from '@ngrx/store';

export const startGame = createAction('[Game] Start Game');
export const endGame = createAction('[Game] End Game');
export const updateTimer = createAction('[Game] Update Timer');
export const spawnMole = createAction(
  '[Game] Spawn Mole',
  props<{ moleId: number; displayTime: number }>()
);
export const hideMole = createAction(
  '[Game] Hide Mole',
  props<{ moleId: number }>()
);
export const whackMole = createAction(
  '[Game] Whack Mole',
  props<{ moleId: number }>()
);
