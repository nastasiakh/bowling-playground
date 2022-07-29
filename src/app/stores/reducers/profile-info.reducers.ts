import {createReducer, on} from "@ngrx/store";
import {
  addProfileInfo,
  getProfileInfo,
  setBirthday,
  setGender,
  setName,
} from "../actions/profile-info.actions";
import {ProfileInfoRequest} from "../../dto/profileInfo";

export const initialState: ProfileInfoRequest = {};
export const profileInfoReducer = createReducer(
  initialState,
  on(setGender, (state, action) => (
      {...state, gender: action.gender}
    )
  ),
  on(setBirthday, (state, action) => (
      {...state, birthday: action.birthday}
    )
  ),
  on(setName, (state, action) => (
      {...state, name: action.name}
    )
  ),
  on(addProfileInfo, (state, action) => (
      {...state, id: action.id, gender: action.gender, birthday: action.birthday, name: action.name}
    )
  ),
  on(getProfileInfo, (state) => (
    {...state}

  ))
)
