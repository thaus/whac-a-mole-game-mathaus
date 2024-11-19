import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhacAMoleTimerComponent } from './whac-a-mole-timer.component';

describe('WhacAMoleTimerComponent', () => {
  let component: WhacAMoleTimerComponent;
  let fixture: ComponentFixture<WhacAMoleTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhacAMoleTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhacAMoleTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
