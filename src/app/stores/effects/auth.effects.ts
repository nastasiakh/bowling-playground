import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, Observable, switchMap, take, tap} from "rxjs";
import {logIn, LogInRequest, logInSuccessfully} from "../actions/auth.actions";
import {UserProfile} from "../reducers/auth.reducers";
import {Store} from "@ngrx/store";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,

  ) {
  }

  createNewProfile$ = createEffect(() => this.actions$.pipe(
    ofType(logIn),
    // switchMap({})
  ))

}
