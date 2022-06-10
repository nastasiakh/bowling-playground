import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGenderComponent } from './profile-gender.component';

describe('ProfileGenderComponent', () => {
  let component: ProfileGenderComponent;
  let fixture: ComponentFixture<ProfileGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
