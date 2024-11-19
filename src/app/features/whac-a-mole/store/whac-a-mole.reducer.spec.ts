import { GAME_CONFIG } from '../model/whac-a-mole.constant';
import { initialState, Mole } from '../model/whac-a-mole.interface';
import {
  endGame,
  hideMole,
  spawnMole,
  startGame,
  updateTimer,
  whackMole,
} from './whac-a-mole.actions';
import { gameReducer } from './whac-a-mole.reducer';

describe('gameReducer', () => {
  it('should start the game and reset mole visibility', () => {
    const action = startGame();
    const newState = gameReducer(initialState, action);

    expect(newState.isPlaying).toBe(true);

    newState.moles.forEach((mole) => {
      expect(mole.isVisible).toBe(false);
      expect(mole.displayTime).toBe(0);
    });
  });

  it('should end the game, reset the score, and update the highest score', () => {
    const state = {
      ...initialState,
      score: 10,
      highestScore: 5,
      isPlaying: true,
    };
    const action = endGame();
    const newState = gameReducer(state, action);

    expect(newState.isPlaying).toBe(false);
    expect(newState.score).toBe(0);
    expect(newState.highestScore).toBe(10);
    expect(newState.timeLeft).toBe(GAME_CONFIG.gameDuration);
  });

  it('should decrement the timer if time is left', () => {
    const state = { ...initialState, timeLeft: 10 };
    const action = updateTimer();
    const newState = gameReducer(state, action);

    expect(newState.timeLeft).toBe(9);
  });

  it('should not decrement the timer if time is 0', () => {
    const state = { ...initialState, timeLeft: 0 };
    const action = updateTimer();
    const newState = gameReducer(state, action);

    expect(newState.timeLeft).toBe(0);
  });

  it('should spawn a mole by setting its visibility and display time', () => {
    const moleId = 1;
    const displayTime = 2000;
    const action = spawnMole({ moleId, displayTime });
    const newState = gameReducer(initialState, action);

    const mole = newState.moles.find((m) => m.id === moleId);
    expect(mole?.isVisible).toBe(true);
    expect(mole?.displayTime).toBe(displayTime);
  });

  it('should hide a visible mole and decrease score if mole is visible', () => {
    const state = {
      ...initialState,
      score: 5,
      moles: [
        { id: 0, isVisible: true, displayTime: 1000 },
        { id: 1, isVisible: false, displayTime: 0 },
      ],
    };
    const moleId = 0;
    const action = hideMole({ moleId });
    const newState = gameReducer(state, action);

    expect(newState.score).toBe(4);
    expect(newState.moles[0].isVisible).toBe(false);
  });

  it('should hide a mole and increase score if mole is visible after whacking', () => {
    const state = {
      ...initialState,
      score: 5,
      moles: [
        { id: 0, isVisible: true, displayTime: 1000 },
        { id: 1, isVisible: false, displayTime: 0 },
      ],
    };
    const moleId = 0;
    const action = whackMole({ moleId });
    const newState = gameReducer(state, action);

    expect(newState.score).toBe(6);
    expect(newState.moles[0].isVisible).toBe(false);
  });

  it('should decrease score if mole is not visible when whacked', () => {
    const state = { ...initialState, score: 5 };
    const moleId = 0;
    const action = whackMole({ moleId });
    const newState = gameReducer(state, action);

    expect(newState.score).toBe(4);
    expect(newState.moles[0].isVisible).toBe(false);
  });
});
