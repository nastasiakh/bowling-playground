import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {FormControl, Validators} from "@angular/forms";
import {signUpWithEmail} from "../stores/actions/auth.actions";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  emailField = new FormControl('',[Validators.required, Validators.email])
  passwordField = new FormControl('',[Validators.required, Validators.minLength(6)])


  constructor(private router: Router, private store: Store ) {

  }

  ngOnInit(): void {
  }

  signUpWithEmail(){
    if(this.emailField.valid){
      this.store.dispatch(signUpWithEmail({
        profile: {
          email: this.emailField.value,
          password: this.passwordField.value,
          id: String(new Date().getMilliseconds())
        }
      }))
      this.router.navigate(['signup', 'info'])
    }
  }
}
