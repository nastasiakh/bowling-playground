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
export class SignInEmailComponent implements OnInit {

  emailField = new FormControl(
    '',
    [Validators.required, Validators.email])
  passwordField = new FormControl(
    '',
    [Validators.required, Validators.minLength(6)])


  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
  }

  logIn(){
    console.log('email ', this.emailField.value, ' password: ', this.passwordField.value)
    this.store.dispatch(
      logIn( {profile: {email: this.emailField.value, password: this.passwordField.value}})
    )
    this.router.navigate(['profile'])
  }
}
