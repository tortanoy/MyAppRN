import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux'

import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { 
  persistReducer,
  persistStore
} from 'redux-persist'
import persistConfig from './persistConfig'

const configureStore = preloadedState => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middlewares = [thunk]
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    )
  )

  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
