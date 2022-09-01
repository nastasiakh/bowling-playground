import {createReducer, on} from "@ngrx/store";
import {
  logIn,
  logInFailed,
  logInSuccessfully, signUpWithEmail, signUpWithEmailFailed, signUpWithEmailSuccessfully
} from "../actions/auth.actions";
import {displayToast} from "../actions/errors.actions";

export const initialState: UserStateInterface = {};

export const authReducer = createReducer(
  initialState,
  on(logIn, (state, action) =>(
    {...state,
      email: action.profile.email,
      password: action.profile.password,
      waitingSignUp: true
    }
    )
  ),
  on(logInSuccessfully, (state, action)  =>(
    {
      ...state,
      uid: action.uid,
      waitingSignUp: false
    }
    )
  ),
  on(logInFailed, (state)  =>(
    {
      ...state,
      waitingSignUp: false
  })),

  on(signUpWithEmail, (state,action ) => (
      {
        ...state,
        email: action.profile.email,
        password: action.profile.password,
        waitingSignUp: true
      }
    )
  ),
  on(signUpWithEmailSuccessfully, (state, action) => (
      {
        ...state,
        uid: action.uid,
        waitingSignUp: false
      }
    )
  ),
  on(signUpWithEmailFailed, (state) => (
      {
        ...state,
        waitingSignUp: false
      }
    )
  ),
  on(displayToast, (state) => (
      {
        ...state,
        waitingSignUp: false
      }
    )
  )
)

export interface UserStateInterface{
  email?: string,
  uid?: string,
  waitingSignUp?: boolean
}
