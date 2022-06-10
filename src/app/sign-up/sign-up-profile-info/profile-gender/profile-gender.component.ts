import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {setGender} from "../../../stores/actions/auth.actions";

@Component({
  selector: 'app-profile-gender',
  templateUrl: './profile-gender.component.html',
  styleUrls: ['./profile-gender.component.css']
})
export class ProfileGenderComponent implements OnInit {

  genderValue: string = ''

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
  }


  addProfileInfo(){
    if(this.genderValue){
      this.store.dispatch(setGender({ gender: this.genderValue}))
      this.router.navigate(['signup', 'bday'])
    }

  }
}
