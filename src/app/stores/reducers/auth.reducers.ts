import {createReducer, on} from "@ngrx/store";
import {
  logIn,
  logInFailed,
  logInSuccessfully, signUpWithEmail, signUpWithEmailFailed, signUpWithEmailSuccessfully
} from "../actions/auth.actions";
import {LogInCredentials} from "../../dto/profileInfo";

export const initialState = {
    email: '',
    password: '',
    uid:  '',

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
      password: action.profile.password}
    )
  ),
  on(signUpWithEmailSuccessfully, (state, action)  =>({...state, uid: action.uid })),
  on(signUpWithEmailFailed, (state)  =>({...state}))
)

