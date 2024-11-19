import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhacAMoleComponent } from './whac-a-mole.component';
import { initialState } from './model/whac-a-mole.interface';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('WhacAMoleComponent', () => {
  let component: WhacAMoleComponent;
  let fixture: ComponentFixture<WhacAMoleComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhacAMoleComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(WhacAMoleComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
