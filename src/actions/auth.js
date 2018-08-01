import { 
  LOGIN_SUCCESS, 
  LOGOUT
} from './types'

export const loginSuccess = (payload) => {
	return { type: LOGIN_SUCCESS, payload }
}

export const logout = () => {
  return { type: LOGOUT }
}