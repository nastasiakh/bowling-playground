import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ProfileInfo, ProfileInfoRequest} from "../dto/profileInfo";
import {Observable} from "rxjs";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile$: Observable<ProfileInfo> = this.store.select(state => state.profileInfo)

  constructor(private store: Store<{profileInfo: ProfileInfo}>) {

  }

  ngOnInit() {

  }

}
