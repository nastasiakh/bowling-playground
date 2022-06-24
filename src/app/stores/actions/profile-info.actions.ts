import {createAction, props} from "@ngrx/store";

export const setGender = createAction('SET_GENDER', props<{gender: string}>())
export const setGenderSuccessfully = createAction('SET_GENDER_SUCCESSFULLY')
export const setGenderFailed = createAction('SET_GENDER_FAILED')

export const setBirthday = createAction('SET_BIRTHDAY', props<{birthday: string}>())
export const setBirthdaySuccessfully = createAction('SET_BIRTHDAY_SUCCESSFULLY')
export const setBirthdayFailed = createAction('SET_BIRTHDAY_FAILED')

export const setName = createAction('SET_NAME', props<{name: string}>())
export const setNameSuccessfully = createAction('SET_NAME_SUCCESSFULLY')
export const setNameFailed = createAction('SET_NAME_FAILED')

export const updateProfileInfo = createAction('UPDATE_PROFILE', props<{gender: string, birthday: string, name: string}>());
export const profileInfoUpdated = createAction('PROFILE_UPDATED');
export const profileInfoFailed = createAction('PROFILE_UPDATE_FAILED');

export const getProfileInfo = createAction('GOT_PROFILE_iNFO');
export const getInfoSuccessfully = createAction('GOT_PROFILE_INFO');
export const getInfoFailed = createAction('GOT_PROFILE_FAILED');
