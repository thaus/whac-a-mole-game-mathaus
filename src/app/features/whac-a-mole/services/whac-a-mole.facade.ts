import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectHighestScore,
  selectIsPlaying,
  selectMoles,
  selectScore,
  selectTimeLeft,
} from '../store/whac-a-mole.selectors';
import { Mole, WhacAMoleState } from '../model/whac-a-mole.interface';
import { endGame, startGame, whackMole } from '../store/whac-a-mole.actions';

@Injectable({
  providedIn: 'root',
})
export class WhacAMoleFacade {
  score$: Observable<number> = this.store.select(selectScore);
  highestScore$: Observable<number> = this.store.select(selectHighestScore);
  timeLeft$: Observable<number> = this.store.select(selectTimeLeft);
  moles$: Observable<Mole[]> = this.store.select(selectMoles);
  isPlaying$: Observable<boolean> = this.store.select(selectIsPlaying);

  constructor(private store: Store<WhacAMoleState>) {}

  startGame(): void {
    this.store.dispatch(startGame());
  }

  whackMole(moleId: number): void {
    this.store.dispatch(whackMole({ moleId }));
  }
}
