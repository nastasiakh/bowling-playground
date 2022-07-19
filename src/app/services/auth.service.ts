import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LogInCredentials, SignUpCredentials} from "../dto/profileInfo";
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: Auth) { }

  // signIn(data: LogInCredentials): Observable<LogInCredentials> {
  //   return this.http.post(
  //     this.urlLogIn,
  //     {email: data.email, password: data.password},
  //     {headers: {'Content-type': 'application/json'}}
  //   ).pipe(map(e => e as LogInCredentials))
  // }
  async signUp(data: SignUpCredentials): Promise<string|undefined>{
    const newUser = await createUserWithEmailAndPassword(this.auth, data.email, data.password).then(
      (user) => {return user.user.uid}
    ).catch(
      (error) => {
        if ( error.code === 'auth/account-exists-with-different-credential'){
          return error
        }
      })
    return newUser
  }

}
