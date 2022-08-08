import { Injectable } from '@angular/core';
import {LogInCredentials, SignUpCredentials} from "../dto/profileInfo";
import {Auth, createUserWithEmailAndPassword, getIdToken, idToken} from "@angular/fire/auth";


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

  get currentUserId() {
    return this.auth.currentUser?.uid
  }

  async accessToken(): Promise<string> {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      return await getIdToken(currentUser);
    }
    throw new UnauthenticatedError();
  }

  async signUp(data: SignUpCredentials): Promise<string>{
    try {
      const newUser = await createUserWithEmailAndPassword(this.auth, data.email, data.password)
      return newUser.user.uid
    }catch (error: any)  {
      // console.log('error', error)
      if(error.code === 'auth/email-already-in-use'){
        throw new UserExistedError()
      }
      throw error
    }
  }
}

export class UserExistedError extends Error{

}

export class UnauthenticatedError extends Error{

}
