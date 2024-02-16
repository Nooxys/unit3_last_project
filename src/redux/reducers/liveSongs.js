import { ADD_TO_LIVE } from '../actions'
const initialState = {
  content: null,
}

const liveSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIVE:
      return {
        ...state,
        content: action.payload,
      }

    default:
      return state
  }
}

export default liveSongsReducer
