import {createSelector} from "@ngrx/store";
import {UserStateInterface} from "../reducers/auth.reducers";
import {NewUserCreating, ProfileInfoRequest} from "../../dto/profileInfo";
import {ToastMessagesInterface} from "../../dto/errors";


export interface AppState{
  auth: UserStateInterface
  profileInfo: NewUserCreating
  errorMessage: ToastMessagesInterface
}

export const currentUserSelector = createSelector(
  (state: AppState) => state.auth,
  (state:UserStateInterface) => state.email
)
export const currentUserIdSelector = createSelector(
  (state: AppState) => state.auth,
  (state:UserStateInterface) => state.uid
)

export const errorMessageSelector = createSelector(
  (state: AppState) => state.errorMessage,
  (state: ToastMessagesInterface) => state.message
)

export const errorSolutionSelector = createSelector(
  (state: AppState) => state.errorMessage,
  (state: ToastMessagesInterface) => state.errorSolution
)
