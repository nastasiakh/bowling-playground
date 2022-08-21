import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {FormControl, Validators} from "@angular/forms";
import {signUpWithEmail} from "../stores/actions/auth.actions";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  emailField = new FormControl('',[Validators.required, Validators.email])
  passwordField = new FormControl('',[Validators.required, Validators.minLength(6)])
  shownPassword: boolean = false

  waiting$ : Observable<boolean>

  constructor(private router: Router, private store: Store) {
    this.waiting$ = this.store.pipe(map((state:any) => state.auth.waitingSignUp ?? false))
  }


  showPassword() {
      return this.shownPassword = !this.shownPassword
  };

  ngOnInit(): void {
  }

  signUpWithEmail(){
    if(this.emailField.valid){
      this.store.dispatch(signUpWithEmail({
        profile: {
          email: this.emailField.value,
          password: this.passwordField.value}
      }))
    }
  }
}
