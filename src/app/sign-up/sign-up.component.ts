import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {FormControl, Validators} from "@angular/forms";
import {signUpWithEmail} from "../stores/actions/auth.actions";
import {ProfileInfo} from "../dto/profileInfo";
import {ProfileInfoComponent} from "./sign-up-profile-info/profile-info/profile-info.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  emailField = new FormControl('',[Validators.required, Validators.email])
  passwordField = new FormControl('',[Validators.required, Validators.minLength(6)])
  counter: number = 0
  registeredUser: ProfileInfo = {
    id: this.counter.toString(),
    email: this.emailField.value,
    password: this.passwordField.value,
    gender: this.profile.genderValue,
    birthday: this.profile.birthDay,
    name: this.profile.userName,


  }
  constructor(private router: Router, private store: Store, private profile: ProfileInfoComponent ) {

  }

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
