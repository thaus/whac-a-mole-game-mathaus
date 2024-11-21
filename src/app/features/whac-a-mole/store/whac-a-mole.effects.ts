import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  endGame,
  hideMole,
  spawnMole,
  startGame,
  updateTimer,
} from './whac-a-mole.actions';
import { Injectable } from '@angular/core';
import {
  map,
  mergeMap,
  takeUntil,
  withLatestFrom,
  exhaustMap,
} from 'rxjs/operators';
import { EMPTY, interval, merge, timer } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsPlaying } from './whac-a-mole.selectors';
import { getRandomInt } from '../../../shared/utils/random.utils';
import { GAME_CONFIG } from '../model/whac-a-mole.constant';

@Injectable()
export class GameEffects {
  readonly timePerSecond = 1000;
  readonly gameTimeInMilliseconds =
    GAME_CONFIG.gameDuration * this.timePerSecond;

  constructor(private actions$: Actions, private store: Store) {}

  startTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startGame),
      exhaustMap(() =>
        merge(
          interval(this.timePerSecond).pipe(map(() => updateTimer())),
          timer(this.gameTimeInMilliseconds).pipe(map(() => endGame()))
        ).pipe(takeUntil(this.actions$.pipe(ofType(endGame))))
      )
    )
  );

  spawnMoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startGame),
      exhaustMap(() => {
        const spawnInterval = getRandomInt(
          GAME_CONFIG.spawnIntervalMin,
          GAME_CONFIG.spawnIntervalMax
        );

        const generateSpawnMoleAction = () => {
          const randomMoleId = getRandomInt(0, GAME_CONFIG.totalMoles - 1);
          const displayTime = getRandomInt(
            GAME_CONFIG.moleDisplayTimeMin,
            GAME_CONFIG.moleDisplayTimeMax
          );
          return spawnMole({ moleId: randomMoleId, displayTime });
        };

        return timer(0, spawnInterval).pipe(
          map(() => generateSpawnMoleAction()),
          takeUntil(this.actions$.pipe(ofType(endGame)))
        );
      })
    )
  );

  hideMole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(spawnMole),
      withLatestFrom(this.store.select(selectIsPlaying)),
      mergeMap(([{ moleId, displayTime }, isPlaying]) => {
        if (isPlaying) {
          return timer(displayTime).pipe(
            map(() => hideMole({ moleId })),
            takeUntil(this.actions$.pipe(ofType(endGame)))
          );
        }
        return EMPTY;
      })
    )
  );
}
