import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

  let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
  let persistor = persistStore(store)
  export { store, persistor }
