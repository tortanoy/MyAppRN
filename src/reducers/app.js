import { 
	IS_LOADING,   
	SET_USER
} from './../actions/types'

const INITIAL_STATE = {
	loading: false, 
	user: '', 
}

const app = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case IS_LOADING:
			return { ...state, loading: action.loading } 
		case SET_USER:
      return { ...state, user: action.user }
		default:
			return state
	}
}

export default app