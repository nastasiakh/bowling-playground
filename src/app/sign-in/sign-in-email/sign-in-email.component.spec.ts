import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInEmailComponent } from './sign-in-email.component';

describe('SignInEmailComponent', () => {
  let component: SignInEmailComponent;
  let fixture: ComponentFixture<SignInEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
