import { createReducer, on } from '@ngrx/store';
import { initialState, Mole } from '../model/whac-a-mole.interface';
import {
  endGame,
  hideMole,
  spawnMole,
  startGame,
  updateTimer,
  whackMole,
} from './whac-a-mole.actions';
import { GAME_CONFIG } from '../model/whac-a-mole.constant';

export const gameReducer = createReducer(
  initialState,
  on(startGame, (state) => ({
    ...state,
    isPlaying: true,
    moles: state.moles.map((mole) => ({
      ...mole,
      isVisible: false,
      displayTime: 0,
    })),
  })),
  on(endGame, (state) => ({
    ...state,
    isPlaying: false,
    score: 0,
    timeLeft: GAME_CONFIG.gameDuration,
    highestScore: Math.max(state.score, state.highestScore),
  })),
  on(updateTimer, (state) => ({
    ...state,
    timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
  })),
  on(spawnMole, (state, { moleId, displayTime }) => ({
    ...state,
    moles: state.moles.map((mole) =>
      mole.id === moleId ? { ...mole, isVisible: true, displayTime } : mole
    ),
  })),
  on(hideMole, (state, { moleId }) => ({
    ...state,
    score: state.moles[moleId].isVisible ? state.score - 1 : state.score,
    moles: state.moles.map((mole) =>
      mole.id === moleId ? { ...mole, isVisible: false } : mole
    ),
  })),
  on(whackMole, (state, { moleId }) => ({
    ...state,
    score: state.moles[moleId].isVisible ? state.score + 1 : state.score - 1,
    moles: state.moles.map((mole) =>
      mole.id === moleId ? { ...mole, isVisible: false } : mole
    ),
  }))
);
