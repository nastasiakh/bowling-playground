import {createAction, props} from "@ngrx/store";

export const displayToast = createAction('DISPLAY_TOAST', props<{title: string, message: string, errorSolution: string}>())
export const closeToast = createAction('CLOSE_TOAST')

