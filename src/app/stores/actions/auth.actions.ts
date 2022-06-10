import {createAction, props} from "@ngrx/store";
import {UserDto} from "../../dto/user.dto";

export const logIn = createAction('LOG_IN', props<{request: LogInRequest}>())
export const logInSuccessfully = createAction('LOG_IN_SUCCESSFULLY', props<{request: LogInRequest}>())
export const logInFailed = createAction('LOG_IN_FAILED')

export const signUpWithEmail = createAction('SIGNED_UP_WITH_EMAIL', props<{profile: UserDto}>())
export const setGender = createAction('SET_GENDER', props<{gender: string}>())
export const setBirthday = createAction('SET_BIRTHDAY', props<{birthday: string}>())
export const setName = createAction('SET_NAME', props<{name: string}>())


export interface LogInRequest{
  email: string,
  password: string
}
