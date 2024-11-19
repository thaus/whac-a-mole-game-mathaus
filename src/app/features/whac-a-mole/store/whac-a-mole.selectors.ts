import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WhacAMoleState } from '../model/whac-a-mole.interface';

const selectGameState = createFeatureSelector<WhacAMoleState>('game');

export const selectScore = createSelector(
  selectGameState,
  (state: WhacAMoleState) => state.score
);

export const selectHighestScore = createSelector(
  selectGameState,
  (state: WhacAMoleState) => state.highestScore
);

export const selectTimeLeft = createSelector(
  selectGameState,
  (state: WhacAMoleState) => state.timeLeft
);

export const selectMoles = createSelector(
  selectGameState,
  (state: WhacAMoleState) => state.moles
);

export const selectIsPlaying = createSelector(
  selectGameState,
  (state: WhacAMoleState) => state.isPlaying
);

export const selectGameStateDetails = createSelector(
  selectGameState,
  (state: WhacAMoleState) => state
);
