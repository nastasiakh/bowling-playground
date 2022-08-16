import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationChoiceComponent } from './combination-choice.component';

describe('CombinationChoiceComponent', () => {
  let component: CombinationChoiceComponent;
  let fixture: ComponentFixture<CombinationChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
