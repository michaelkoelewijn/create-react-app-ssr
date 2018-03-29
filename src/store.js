import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory' //TODO TO DO
import rootReducer from './reducers'



let initialState = {}, history = {};
if(typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__;
  history = createHistory();
}

export { history };

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers
)