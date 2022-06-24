import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userEmail = ''
  emailField = new FormControl(this.userEmail,[Validators.email])

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getUserInfo()
  }
  getUserInfo(){
    this.store.subscribe()
  }
}
