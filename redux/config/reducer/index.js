import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  expenseData: categoriesReducer,
})
