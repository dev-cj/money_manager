import { createStore, applyMiddleware } from 'redux'
import userDataReducer from './userData/reducer'
import configReducer from './config/reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
const middleware = [thunk]

export default createStore(
  combineReducers({ userDataReducer, configReducer }),
  composeWithDevTools(applyMiddleware(...middleware)),
)
