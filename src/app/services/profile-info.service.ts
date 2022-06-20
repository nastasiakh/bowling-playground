import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProfileInfo} from "../dto/profileInfo";

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {
  urlAddNewProfileInfo = environment.baseUrl+'/signup/info'

  constructor(private http: HttpClient) { }

  addNewInfo(data: ProfileInfo): Observable<ProfileInfo> {
    return this.http.post(
      this.urlAddNewProfileInfo,
      data,
      {headers: {'Content-type': 'application/json'}}
    ).pipe(map(e => e as ProfileInfo))
  }
}
