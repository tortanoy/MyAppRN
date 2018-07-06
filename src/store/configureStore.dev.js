import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux'

import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { persistStore } from 'redux-persist'

const configureStore = preloadedState => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middlewares = [thunk]
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    )
  )

  const persistor = persistStore(store)


  return { store, persistor }
}

export default configureStore
