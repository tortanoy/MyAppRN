import { 
  createStore, 
  applyMiddleware 
} from 'redux'

import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { 
  persistReducer,
  persistStore
} from 'redux-persist'
import persistConfig from './persistConfig'

const configureStore = preloadedState => {
  const middlewares = [thunk]
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(...middlewares),
  )
  const persistor = persistStore(store)
  return { persistor, store }
}

export default configureStore
