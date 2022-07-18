import {createSelector} from "@ngrx/store";

export interface SignUpState{
  uid?: string,
}

export interface AppState{
  signup: SignUpState
}

export const SignUpSelector = createSelector(
  (state: AppState) => state.signup,
  (state:SignUpState) => state
)
export const currentUserSelector = createSelector(
  (state: AppState) => state.signup,
  (state:SignUpState) => state.uid
)
