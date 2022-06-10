import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "redux";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // profile$: Observable<any>

  constructor(private store: Store) {
    // this.profile$ = this.store.select('ge
  }

  ngOnInit(): void {
  }

}
