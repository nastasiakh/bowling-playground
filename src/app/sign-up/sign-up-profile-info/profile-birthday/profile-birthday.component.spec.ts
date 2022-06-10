import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBirthdayComponent } from './profile-birthday.component';

describe('ProfileBirthdayComponent', () => {
  let component: ProfileBirthdayComponent;
  let fixture: ComponentFixture<ProfileBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
