import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Mole } from '../../model/whac-a-mole.interface';

@Component({
  selector: 'app-whac-a-mole-circle',
  standalone: true,
  imports: [],
  templateUrl: './whac-a-mole-circle.component.html',
  styleUrl: './whac-a-mole-circle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhacAMoleCircleComponent {
  @Input() mole!: Mole | null;

  @Output() onClick = new EventEmitter<number>();

  emitMole(): void {
    this.onClick.emit(this.mole?.id);
  }
}
