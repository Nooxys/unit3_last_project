import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions'
const initialState = {
  favorites: [],
}

const favoriteSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ),
      }

    default:
      return state
  }
}
export default favoriteSongsReducer
