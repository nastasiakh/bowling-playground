import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, from, map, mergeMap, of, switchMap, take, tap,} from "rxjs";
import {Router} from "@angular/router";
import {ProfileInfoService} from "../../services/profile-info.service";
import {
  addProfileInfo,
  getInfoFailed,
  getInfoSuccessfully,
  getProfileInfo, profileInfoAdded,
  profileInfoFailed,
  setBirthday, setBirthdayFailed,
  setBirthdaySuccessfully,
  setGender,
  setGenderFailed,
  setGenderSuccessfully, setName, setNameFailed, setNameSuccessfully,
} from "../actions/profile-info.actions";
import {NewUserCreating, ProfileInfo, ProfileInfoRequest} from "../../dto/profileInfo";

@Injectable()
export class ProfileInfoEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private profileInfo: ProfileInfoService
  ) {
  }

  // getProfileInfo$ = createEffect(()=> this.actions$.pipe(
  //   ofType(getProfileInfo)
  // ))
  // updateGender$ = createEffect(() => this.actions$.pipe(
  //   ofType(setGender),
  //   switchMap( action =>
  //     this._setGenderValue(action.gender))
  // ))

  _getUser(){
    return this.profileInfo.getInfo().pipe(
      map(single_pet => getInfoSuccessfully()),
      catchError(e => of(getInfoFailed))
    )
  }
  getPetInfo$ = createEffect(()=> this.actions$.pipe(
    ofType(getProfileInfo),
    switchMap( action => this._getUser()
    )
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
  _addUserInfo(data: NewUserCreating){
    return this.profileInfo.addNewInfo(data).
    pipe(
      map(result => {
        this.router.navigate(['profile', 'home'])
        return profileInfoAdded({result: result})
      }),
      catchError(e => of(profileInfoFailed))
    )
  }
  createProfile$ = createEffect(() => this.actions$.pipe(
        ofType(addProfileInfo),
        switchMap( action => {
          return this._addUserInfo(
            {
              id: action.id,
              email: action.email,
              gender: action.gender,
              birthday: action.birthday,
              name: action.name
            }
          ).pipe(
            take(1)
          )
        }
      )
    )
  )


}
