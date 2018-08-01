import { combineReducers } from 'redux'
import app from './app'
import { DELETE_USER } from './../actions/types'

const appReducers = combineReducers({
	app
})

const rootReducer = (state, action) => {
	if (action.type === DELETE_USER) {	
		state = undefined
	}
	return appReducers(state, action)
}


export default rootReducer