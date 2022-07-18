import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {FormControl, Validators} from "@angular/forms";
import {signUpWithEmail} from "../stores/actions/auth.actions";
import {AppState, currentUserSelector} from "../stores/selectors/auth.selector";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  emailField = new FormControl('',[Validators.required, Validators.email])
  passwordField = new FormControl('',[Validators.required, Validators.minLength(6)])
  error = {}
  shownPassword: boolean = false

  constructor(private router: Router, private store: Store) {
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
      this.router.navigate(['signup', 'info'])
    }
  }
}
