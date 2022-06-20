import { Injectable } from '@angular/core';
import {UserDto} from "../dto/user.dto";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {SignUpCredentials} from "../stores/effects/auth.effects";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlLogIn = environment.baseUrl+'/login'
  urlSignUp = environment.baseUrl+'/signup'

  constructor( private http: HttpClient) { }

  signIn(email: string, password: string): Observable<UserDto> {
    return this.http.post(
      this.urlLogIn,
      {email: email, password: password},
      {headers: {'Content-type': 'application/json'}}
    ).pipe(map(e => e as UserDto))
  }
  signUp(data: SignUpCredentials): Observable<UserDto>{
    return this.http.post(
      this.urlSignUp,
      {email: data.email, password: data.password, id: data.id},
      {headers: {'Content-type': 'application/json'}}
    ).pipe(map( e => e as UserDto))
  }

}
