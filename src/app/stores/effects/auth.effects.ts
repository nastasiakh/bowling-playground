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
import {AuthService, UserExistedError} from "../../services/auth.service";
import {Router} from "@angular/router";
import {LogInCredentials, SignUpCredentials} from "../../dto/profileInfo";
import {displayToast} from "../actions/errors.actions";

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
        this._doSignIn({email: action.profile.email, password: action.profile.password}))
    )
  )
  _doSignIn(data: LogInCredentials) {
    return from(this.authService.signIn(data))
      .pipe(
        map(user => {
          this.router.navigate(['profile', 'home'])
          return logInSuccessfully({uid: user})
        }
        ),
        catchError( e => {
          if (e instanceof UserExistedError) {
            return of(displayToast(
                {
                  title: 'Oops',
                  errorSolution: 'sign up',
                  message: "User doesn't existed. Try to sign up instead"
                }
              )
            )
          }
          return of(logInFailed())
        })
    )
  }

  signUpEmail$ = createEffect(() => this.actions$.pipe(
    ofType(signUpWithEmail),
    switchMap(action =>
      this._doSignUp({email: action.profile.email, password: action.profile.password}))

  ))

  _doSignUp(data: SignUpCredentials) {
    return from(this.authService.signUp(data)).
      pipe(
        map(newUser => {
          this.router.navigate(['signup', 'info'])
          return signUpWithEmailSuccessfully({uid: newUser})
        }),
        catchError(e => {
          if( e instanceof UserExistedError){
            return of(displayToast(
              {
                title: 'Oops',
                errorSolution: 'log in',
                message: 'User Existed. Try to log in instead'
              }
            )
            )
          }
          return of(signUpWithEmailFailed())
        })
      )
  }
}

