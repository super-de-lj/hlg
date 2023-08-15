import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

//对原有的 reducer 进行处理 生成 持久化的 reducer
var PersistedReducer = persistReducer({ key: 'root', storage }, reducer)

//创建一个唯一的 store
const store = createStore(PersistedReducer, applyMiddleware(thunk, logger));

//对唯一的 store 进行 持久化处理, 生成 持久化的 store
var persistor = persistStore(store)

export {
    persistor, store
};