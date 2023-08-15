import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import { persistReducer, persistStore } from 'redux-persist'
import { logger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'

var persistedReducer = persistReducer({ key: 'root', storage }, reducer);

var store = createStore(persistedReducer, applyMiddleware());

var persistor = persistStore(store);

export { store, persistor }