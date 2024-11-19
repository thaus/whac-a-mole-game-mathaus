import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-whac-a-mole-panel',
  standalone: true,
  imports: [],
  templateUrl: './whac-a-mole-panel.component.html',
  styleUrl: './whac-a-mole-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhacAMolePanelComponent {
  @Input() score: number | null = 0;
  @Input() highestScore: number | null = 0;
}
