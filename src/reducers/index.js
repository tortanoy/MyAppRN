import storage from 'redux-persist/lib/storage'
import { persistCombineReducers } from 'redux-persist'
import app from './app'
import { DELETE_USER } from './../actions/types'

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['app'],
	blacklist: ['user']
}

const appReducers = persistCombineReducers(persistConfig, {
	app
})

const rootReducer = (state, action) => {
	if (action.type === DELETE_USER) {	
		console.log(storage.getAllKeys())
		Object.keys(state).forEach(key => {	
			console.log(key)
			storage.removeItem(`persist:${key}`)
		})
		state = undefined
	}
	return appReducers(state, action)
}


export default rootReducer