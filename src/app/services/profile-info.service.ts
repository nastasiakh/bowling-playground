import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {NewUserCreating, ProfileInfo} from "../dto/profileInfo";

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {
  url = '/api/signup/info'

  constructor(private http: HttpClient) { }

  addNewInfo(data: NewUserCreating): Observable<string> {
    return this.http.post(
      this.url,
      data,
      {headers: {'Content-type': 'application/json'}}
    ).pipe(map(e => e as string))
  }

  getInfo(): Observable<ProfileInfo> {
    return this.http.get(this.url).pipe(
      map(e => e as ProfileInfo)
    )
  }

}
