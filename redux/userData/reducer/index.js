import { combineReducers } from 'redux'
import expenseReducer from './expenseReducer'
import incomeReducer from './incomeReducer'
import savingsReducer from './savingsReducer'
export default combineReducers({
  expenseData: expenseReducer,
  incomeData: incomeReducer,
  savingsData: savingsReducer,
})
