import { api } from './BaseApi.s'

const LOGIN_URL = '/auth/login'
const USER_DETAILS_URL = '/auth/user'
const LOGOUT_URL = '/auth/logout'

export const LoginApi = (username: string, password: string) => {
  return api.post(LOGIN_URL, { email: username, password: password })
}

export const UserDetailsAPI = () => {
  return api.get(USER_DETAILS_URL)
}

export const UserDetailsAPI1 = () => {
  return api.get(USER_DETAILS_URL)
}

export const UserLogout = () => {
  return api.get(LOGOUT_URL)
}
