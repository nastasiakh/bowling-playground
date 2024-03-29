import {Observable} from "rxjs";

export interface ProfileInfo extends SignUpCredentials, ProfileInfoRequest{}

export interface LogInCredentials{
  email: string,
  password: string
}

export interface SignUpCredentials extends LogInCredentials{
  id?: string
}

export interface ProfileInfoRequest{
  id?: string,
  gender?: string,
  birthday?: string,
  name?: string,
  image?: string
}
export interface NewUserCreating{
  id?: string,
  email?: string,
  gender?: string,
  birthday?: string,
  name?: string,
  image?: string
}
export interface CurrentUser{
  id: string,
  email: string,
  token: string
}
