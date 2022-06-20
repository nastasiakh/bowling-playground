import {createAction, props} from "@ngrx/store";
import {UserDto} from "../../dto/user.dto";
import {SignUpCredentials} from "../effects/auth.effects";

export const logIn = createAction('LOG_IN', props<{profile: UserDto}>())
export const logInSuccessfully = createAction('LOG_IN_SUCCESSFULLY')
export const logInFailed = createAction('LOG_IN_FAILED')

export const signUpWithEmail = createAction('SIGNED_UP_WITH_EMAIL', props<{profile: SignUpCredentials}>())
export const signUpWithEmailSuccessfully = createAction('SIGNED_UP_WITH_EMAIL_SUCCESSFULLY')
export const signUpWithEmailFailed = createAction('SIGNED_UP_WITH_EMAIL_FAILED')


