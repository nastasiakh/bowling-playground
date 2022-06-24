import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, } from "rxjs";
import {Router} from "@angular/router";
import {ProfileInfoService} from "../../services/profile-info.service";
import {
  getInfoFailed,
  getInfoSuccessfully,
  getProfileInfo,
  profileInfoFailed,
  profileInfoUpdated,
  setBirthday, setBirthdayFailed,
  setBirthdaySuccessfully,
  setGender,
  setGenderFailed,
  setGenderSuccessfully, setName, setNameFailed, setNameSuccessfully, updateProfileInfo
} from "../actions/profile-info.actions";
import {ProfileInfo, ProfileInfoRequest} from "../../dto/profileInfo";

@Injectable()
export class ProfileInfoEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private profileInfo: ProfileInfoService
  ) {
  }

  getProfileInfo$ = createEffect(()=> this.actions$.pipe(
    ofType(getProfileInfo)
  ))
  updateGender$ = createEffect(() => this.actions$.pipe(
    ofType(setGender),
    switchMap( action =>
      this._setGenderValue(action.gender))
  ))

  _setGenderValue(gender: string){
    return this.profileInfo.addNewInfo({gender: gender}).
      pipe(
        map( newGenderValue => setGenderSuccessfully()),
        catchError(e => of(setGenderFailed))
    )
  }

  updateBirthday$ = createEffect(() => this.actions$.pipe(
    ofType(setBirthday),
    switchMap( action =>
      this._setBirthdayValue(action.birthday))
  ))

  _setBirthdayValue(birthday: string){
    return this.profileInfo.addNewInfo({birthday: birthday}).
      pipe(
        map( newGenderValue => setBirthdaySuccessfully()),
        catchError(e => of(setBirthdayFailed))
    )
  }

  updateName$ = createEffect(() => this.actions$.pipe(
    ofType(setName),
    switchMap( action =>
      this._setNameValue(action.name))
  ))


  _setNameValue(name: string){
    return this.profileInfo.addNewInfo({name: name}).
      pipe(
        map( newNameValue => setNameSuccessfully()),
        catchError(e => of(setNameFailed))
    )
  }

  updateProfile$ = createEffect(() => this.actions$.pipe(
    ofType(updateProfileInfo),
    switchMap( action =>
      this._updateUserInfo(
        {gender: action.gender,
          birthday: action.birthday,
          name: action.name}
      )
    )
  )
  )

  _updateUserInfo(data: ProfileInfoRequest){
    return this.profileInfo.addNewInfo(data).
      pipe(
        map( newInfoValues => profileInfoUpdated()),
        catchError(e => of(profileInfoFailed))
    )
  }
}
