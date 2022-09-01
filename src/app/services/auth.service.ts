import { Injectable } from '@angular/core';
import {LogInCredentials, SignUpCredentials} from "../dto/profileInfo";
import {
  Auth,
  createUserWithEmailAndPassword,
  getIdToken,
  idToken,
  signInWithEmailAndPassword
} from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: Auth) { }

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

  async signIn(data: LogInCredentials): Promise<string> {
    try{
      const existedUser = await signInWithEmailAndPassword(this.auth, data.email, data.password)
      return existedUser.user.uid
    } catch (error: any){
      throw error
    }
  }
}

export class UserExistedError extends Error{

}

export class UnauthenticatedError extends Error{

}
