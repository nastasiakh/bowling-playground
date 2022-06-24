import {createReducer, on} from "@ngrx/store";
import {
  logIn,
  logInFailed,
  logInSuccessfully,
  signUpWithEmail
} from "../actions/auth.actions";
import {LogInCredentials} from "../../dto/profileInfo";

export const initialState: LogInCredentials = {
    email: '',
    password: ''

};

export const authReducer = createReducer(
  initialState,
  on(logIn, (state, action) =>(
    {...state, email: action.profile.email, password: action.profile.password}
    )
  ),
  on(logInSuccessfully, (state)  =>({...state})),
  on(logInFailed, (state)  =>({...state})),

  on(signUpWithEmail, (state, action) => (
    {...state,
      email: action.profile.email,
      password: action.profile.password,
      id: action.profile.id}
    )
  ),
)

