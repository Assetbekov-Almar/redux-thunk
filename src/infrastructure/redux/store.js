import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import root from './reducer/root'
export const reactType = process.env.NODE_ENV

let composeEnhancers = compose

if (reactType === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(root, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
