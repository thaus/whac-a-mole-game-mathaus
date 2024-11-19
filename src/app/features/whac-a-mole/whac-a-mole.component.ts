import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhacAMoleFacade } from './services/whac-a-mole.facade';
import { CommonModule } from '@angular/common';
import { WhacAMoleCircleComponent } from './components/whac-a-mole-circle/whac-a-mole-circle.component';
import { WhacAMolePanelComponent } from './components/whac-a-mole-panel/whac-a-mole-panel.component';
import { WhacAMoleTimerComponent } from './components/whac-a-mole-timer/whac-a-mole-timer.component';

@Component({
  selector: 'app-whac-a-mole',
  standalone: true,
  imports: [
    CommonModule,
    WhacAMoleCircleComponent,
    WhacAMolePanelComponent,
    WhacAMoleTimerComponent,
  ],
  templateUrl: './whac-a-mole.component.html',
  styleUrl: './whac-a-mole.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhacAMoleComponent {
  score$ = this.whacAMoleFacade.score$;
  highestScore$ = this.whacAMoleFacade.highestScore$;
  timeLeft$ = this.whacAMoleFacade.timeLeft$;
  moles$ = this.whacAMoleFacade.moles$;
  isPlaying$ = this.whacAMoleFacade.isPlaying$;

  constructor(private whacAMoleFacade: WhacAMoleFacade) {}

  startGame(): void {
    this.whacAMoleFacade.startGame();
  }

  whackMole(moleId: number): void {
    this.whacAMoleFacade.whackMole(moleId);
  }
}
