import {createReducer, on} from "@ngrx/store";
import {
  logIn,
  logInFailed,
  logInSuccessfully,
  setBirthday,
  setGender,
  setName,
  signUpWithEmail
} from "../actions/auth.actions";
import {UserDto} from "../../dto/user.dto";

export const initialState: UserProfile = {
    email: '',
    password: ''

};

export const authReducer = createReducer(
  initialState,
  on(logIn, (state) =>({...state})),
  on(logInSuccessfully, (state, action) =>(
    {...state, email: action.request.email, password: action.request.password})),
  on(logInFailed, (state)  =>({...state})),

  on(signUpWithEmail, (state, action) => (
    {...state, email: action.profile.email, password: action.profile.password, id: action.profile.id})),

  on(setGender, (state, action) => ({...state, gender: action.gender})),
  on(setBirthday, (state, action) => ({...state, birthday: action.birthday})),
  on(setName, (state, action) => ({...state, name: action.name}))
)

export interface UserProfile extends UserDto{
  email: string,
  password: string
}
