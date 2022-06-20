import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, } from "rxjs";
import {
  logIn,
  logInFailed,
  logInSuccessfully, signUpWithEmail,
  signUpWithEmailFailed,
  signUpWithEmailSuccessfully
} from "../actions/auth.actions";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService
  ) {
  }

  signIn$ = createEffect(() => this.actions$.pipe(
      ofType(logIn),
      switchMap(action =>
        this._doSignIn(action.profile.email, action.profile.password))
    )
  )

  signUpEmail$ = createEffect(() => this.actions$.pipe(
    ofType(signUpWithEmail),
    switchMap(action =>
      this._doSignUp({email: action.profile.email, password: action.profile.password, id: action.profile.id}))

  ))

  _doSignIn(email: string, password: string) {
    return this.authService.signIn(email, password).pipe(
      map(user => logInSuccessfully()),
      catchError(e => of(logInFailed()))
    )
  }

  _doSignUp(data: SignUpCredentials) {
    return this.authService.signUp(data).
      pipe(
        map(newUser => signUpWithEmailSuccessfully()),
        catchError(e => of(signUpWithEmailFailed()))
      )
  }
}
export interface SignUpCredentials{
  email: string,
  password: string,
  id: string
}
