import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhacAMolePanelComponent } from './whac-a-mole-panel.component';

describe('WhacAMolePanelComponent', () => {
  let component: WhacAMolePanelComponent;
  let fixture: ComponentFixture<WhacAMolePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhacAMolePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhacAMolePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
