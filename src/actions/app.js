import { 
  IS_LOADING, 
  SET_USER,
  DELETE_USER
} from './types'

export const setLoading = (loading) => {
	return { type: IS_LOADING, loading }
}

export const setUser = (user) => {
  return { type: SET_USER, user }
}

export const deleteUser = () => {
  return { type: DELETE_USER }
}