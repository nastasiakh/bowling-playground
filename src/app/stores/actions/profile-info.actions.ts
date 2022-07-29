import {createAction, props} from "@ngrx/store";
import {Observable} from "rxjs";

export const setGender = createAction('SET_GENDER', props<{gender: string}>())
export const setGenderSuccessfully = createAction('SET_GENDER_SUCCESSFULLY')
export const setGenderFailed = createAction('SET_GENDER_FAILED')

export const setBirthday = createAction('SET_BIRTHDAY', props<{birthday: string}>())
export const setBirthdaySuccessfully = createAction('SET_BIRTHDAY_SUCCESSFULLY')
export const setBirthdayFailed = createAction('SET_BIRTHDAY_FAILED')

export const setName = createAction('SET_NAME', props<{name: string}>())
export const setNameSuccessfully = createAction('SET_NAME_SUCCESSFULLY')
export const setNameFailed = createAction('SET_NAME_FAILED')

export const addProfileInfo = createAction('ADD_PROFILE', props<{id: string|undefined, gender: string, birthday: string, name: string}>());
export const profileInfoAdded = createAction('PROFILE_ADDED');
export const profileInfoFailed = createAction('PROFILE_UPDATE_FAILED');

export const getProfileInfo = createAction('GOT_PROFILE_iNFO');
export const getInfoSuccessfully = createAction('GOT_PROFILE_INFO');
export const getInfoFailed = createAction('GOT_PROFILE_FAILED');
