import storage from 'redux-persist/lib/storage' 
import { persistCombineReducers } from 'redux-persist'
import app from './app'
import { combineReducers } from 'redux'

const persistConfig = {
	key: 'root',
	storage,
}

const reducers = persistCombineReducers(persistConfig, {
	app
})

export default reducers