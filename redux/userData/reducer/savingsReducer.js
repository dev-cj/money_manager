import * as actionTypes from '../actions/actionTypes'

export const initialState = {}

const savingsReducer = (state = initialState, action) => {
  // console.log(state, action)
  switch (action.type) {
    case actionTypes.SET_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}
export default savingsReducer
