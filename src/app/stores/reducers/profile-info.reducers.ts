import {createReducer, on} from "@ngrx/store";
import {getProfileInfo, setBirthday, setGender, setName, updateProfileInfo} from "../actions/profile-info.actions";
import {ProfileInfoRequest} from "../../dto/profileInfo";

export const initialState: ProfileInfoRequest = {
  gender: '',
  birthday: '',
  name: ''
};
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
  on(updateProfileInfo, (state, action) => (
      {...state, gender: action.gender, birthday: action.birthday, name: action.name}
    )
  ),
  on(getProfileInfo, (state) => (
    {...state}

  ))
)
