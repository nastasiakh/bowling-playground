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
  email = new FormControl('',[Validators.required, Validators.email])
  password = new FormControl('',[Validators.required, Validators.minLength(6)])


  constructor(private router: Router, private store: Store ) {

  }

  ngOnInit(): void {
  }

  addProfileInfo(){
    if(this.email.valid){
      this.store.dispatch(signUpWithEmail({
        profile: {
          email: this.email.value,
          password: this.password.value,
          id: String(new Date().getDate())
        }
      }))
    }
    this.router.navigate(['signup', 'gender'])
  }
}
