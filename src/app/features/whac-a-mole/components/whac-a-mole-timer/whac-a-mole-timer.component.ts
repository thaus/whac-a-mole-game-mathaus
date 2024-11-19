import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-whac-a-mole-timer',
  standalone: true,
  imports: [],
  templateUrl: './whac-a-mole-timer.component.html',
  styleUrl: './whac-a-mole-timer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhacAMoleTimerComponent {
  @Input() timeLeft: number | null = 0;
}
