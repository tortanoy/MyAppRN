import { 
	LOGIN_SUCCESS,   
	LOGOUT
} from './../actions/types'

const INITIAL_STATE = {
  account: {},
  isLoggingIn: false,
}

const auth = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case LOGIN_SUCCESS:
			return { ...state, account: action.payload, isLoggingIn: true } 
		case LOGOUT:
      return { ...state, account: {}, isLoggingIn: false }
		default:
			return state
	}
}

export default auth