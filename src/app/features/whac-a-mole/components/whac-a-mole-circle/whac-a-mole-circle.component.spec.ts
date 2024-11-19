import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhacAMoleCircleComponent } from './whac-a-mole-circle.component';
import { Mole } from '../../model/whac-a-mole.interface';
import { ChangeDetectorRef } from '@angular/core';

describe('WhacAMoleCircleComponent', () => {
  let component: WhacAMoleCircleComponent;
  let fixture: ComponentFixture<WhacAMoleCircleComponent>;
  let changeDetectorRef: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhacAMoleCircleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhacAMoleCircleComponent);
    component = fixture.componentInstance;
    changeDetectorRef = fixture.componentRef.injector.get(ChangeDetectorRef);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the "mole-hole--visible" class when mole is visible', () => {
    component.mole = { id: 1, isVisible: true, displayTime: 0 };

    changeDetectorRef.detectChanges();

    const moleDiv: HTMLElement =
      fixture.nativeElement.querySelector('.mole-hole');
    expect(moleDiv.classList).toContain('mole-hole--visible');
  });

  it('should not add the "mole-hole--visible" when mole is not visible', () => {
    component.mole = { id: 1, isVisible: false, displayTime: 0 };

    changeDetectorRef.detectChanges();

    const moleDiv: HTMLElement =
      fixture.nativeElement.querySelector('.mole-hole');
    expect(moleDiv.classList).not.toContain('mole-hole--visible');
  });

  it('should emit mole id on emitMole()', () => {
    const testMole: Mole = { id: 1, isVisible: true, displayTime: 0 };
    component.mole = testMole;
    const spy = spyOn(component.onClick, 'emit');

    component.emitMole();

    expect(spy).toHaveBeenCalledWith(testMole.id);
  });
});
