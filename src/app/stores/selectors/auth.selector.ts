import {createSelector} from "@ngrx/store";
import {UserStateInterface} from "../reducers/auth.reducers";
import {ProfileInfoRequest} from "../../dto/profileInfo";
import {ToastMessagesInterface} from "../../dto/errors";


export interface AppState{
  auth: UserStateInterface
  profileInfo: ProfileInfoRequest
  errorMessage: ToastMessagesInterface
}

export const currentUserSelector = createSelector(
  (state: AppState) => state.auth,
  (state:UserStateInterface) => state.uid
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
