import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ProfileInfo} from "../dto/profileInfo";
import {Observable} from "rxjs";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private store: Store) {

  }

  ngOnInit() {

  }

}
