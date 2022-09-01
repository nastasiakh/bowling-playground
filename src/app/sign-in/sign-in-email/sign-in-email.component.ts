import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {logIn} from "../../stores/actions/auth.actions";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-in-email',
  templateUrl: './sign-in-email.component.html',
  styleUrls: ['./sign-in-email.component.css']
})
export class SignInEmailComponent {

  emailField = new FormControl('',[Validators.required, Validators.email])
  passwordField = new FormControl('',[Validators.required, Validators.minLength(6)])
  shownPassword: boolean = false

  // waiting$ : Observable<boolean>
  constructor(private router: Router, private store: Store) {
    // this.waiting$ = this.store.pipe(map((state:any) => state.auth.waitingSignUp ?? false))
  }

  showPassword() {
    return this.shownPassword = !this.shownPassword
  };

  logInWithEmail(){
    if(this.emailField.valid){
      this.store.dispatch(logIn({
        profile: {
          email: this.emailField.value,
          password: this.passwordField.value}
      }))
    }
  }
}
