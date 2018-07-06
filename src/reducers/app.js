import { 
  IS_LOADING,   
} from './../actions/types'

const INITIAL_STATE = {
  loading: false, 
}

const app = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case IS_LOADING:
		return { ...state, loading: action.loading } 
		default:
			return state
	}
}

export default app