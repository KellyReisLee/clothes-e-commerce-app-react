import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'


import { rootReducer } from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


//Se o valor boolean for true essa array terá logger dentro, 
//caso contrário será apenas uma array vazia.

// --> process.env.NODE_ENV - 
//Ela geralmente assume um dos seguintes valores:
//development: Indica que a aplicação está sendo executada em um ambiente de desenvolvimento.
//production: Indica que a aplicação está sendo executada em um ambiente de produção.
//test: Indica que a aplicação está sendo executada em um ambiente de teste.

const middlewares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean)


const composeEnhancer = (
  process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)
export const persistor = persistStore(store)