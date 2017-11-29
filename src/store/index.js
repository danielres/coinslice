import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose as _compose,
} from 'redux'

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _compose

export const rootReducer = combineReducers({})

const middlewares = applyMiddleware()

const store = createStore(rootReducer, compose(middlewares))

export default store
