import { GAME_CONFIG } from './whac-a-mole.constant';

export interface WhacAMoleState {
  score: number;
  highestScore: number;
  timeLeft: number;
  moles: Mole[];
  isPlaying: boolean;
}

export interface Mole {
  id: number;
  isVisible: boolean;
  displayTime: number;
}

export const initialState: WhacAMoleState = {
  score: 0,
  highestScore: 0,
  timeLeft: GAME_CONFIG.gameDuration,
  moles: Array.from({ length: GAME_CONFIG.totalMoles }, (_, id) => ({
    id,
    isVisible: false,
    displayTime: 0,
  })),
  isPlaying: false,
};
