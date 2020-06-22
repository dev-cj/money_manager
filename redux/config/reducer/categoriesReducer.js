import * as actionTypes from '../actions/actionTypes'

export const initialState = {}

const categoriesReducer = (state = initialState, action) => {
  // console.log(state, action)
  switch (action.type) {
    case actionTypes.ADD_EXPENSE_CATEGORY: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}
export default categoriesReducer
