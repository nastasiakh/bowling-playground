import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LogInCredentials, SignUpCredentials} from "../dto/profileInfo";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlLogIn = environment.baseUrl+'/login'
  urlSignUp = environment.baseUrl+'/users'

  constructor( private http: HttpClient) { }

  signIn(data: LogInCredentials): Observable<LogInCredentials> {
    return this.http.post(
      this.urlLogIn,
      {email: data.email, password: data.password},
      {headers: {'Content-type': 'application/json'}}
    ).pipe(map(e => e as LogInCredentials))
  }
  signUp(data: SignUpCredentials): Observable<SignUpCredentials>{
    return this.http.post(
      this.urlSignUp,
      {email: data.email, password: data.password, id: data.id},
      {headers: {'Content-type': 'application/json'}}
    ).pipe(map( e => e as SignUpCredentials))
  }

}
