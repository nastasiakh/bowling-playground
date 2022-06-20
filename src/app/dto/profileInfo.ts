export interface ProfileInfo{
  email?: string,
  password?: string,
  gender?: string,
  id?: string,
  birthday?: string,
  name?: string,
  image?: string
}

export interface LogInCredentials{
  email: string,
  password: string
}
export interface SignUpCredentials extends LogInCredentials{
  id: string
}

export interface UpdateProfileRequest{
  id: string,
  gender?: string,
  birthday?: string,
  name?: string
}
