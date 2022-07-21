import {createReducer, on} from "@ngrx/store";
import {ToastMessagesInterface} from "../../dto/errors";
import {closeToast, displayToast} from "../actions/errors.actions";

export const initialState: ToastMessagesInterface = {};


export const ToastMessagesReducer = createReducer(
  {},
  on(displayToast, (state, action) => ({
    title: action.title,
    message: action.message,
    errorSolution: action.errorSolution
  })),
  on(closeToast, (state) =>({}) )
)
