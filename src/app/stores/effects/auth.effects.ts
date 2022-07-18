import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, from, map, of, switchMap,} from "rxjs";
import {
  logIn,
  logInFailed,
  logInSuccessfully, signUpWithEmail,
  signUpWithEmailFailed,
  signUpWithEmailSuccessfully
} from "../actions/auth.actions";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {LogInCredentials, SignUpCredentials} from "../../dto/profileInfo";

@Injectable()
export class AuthEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
  //
  // signIn$ = createEffect(() => this.actions$.pipe(
  //     ofType(logIn),
  //     switchMap(action =>
  //       this._doSignIn({email: action.profile.email, password: action.profile.password}))
  //   )
  // )

  signUpEmail$ = createEffect(() => this.actions$.pipe(
    ofType(signUpWithEmail),
    switchMap(action =>
      this._doSignUp({email: action.profile.email, password: action.profile.password}))

  ))

  // _doSignIn(data: LogInCredentials) {
  //   return this.authService.signIn(data).pipe(
  //     map(user => logInSuccessfully()),
  //
  //     catchError(e => of(logInFailed()))
  //   )
  // }

  _doSignUp(data: SignUpCredentials) {
    return from(this.authService.signUp(data)).
      pipe(
        map(newUser => signUpWithEmailSuccessfully({uid: newUser})),
        catchError(e => of(signUpWithEmailFailed()))
      )
  }
}

