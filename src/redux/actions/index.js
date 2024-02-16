export const ADD_TO_LIVE = 'ADD_TO_LIVE'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const addToLiveAction = (content) => {
  return {
    type: ADD_TO_LIVE,
    payload: content,
  }
}

export const addToFavoriteAction = (favorites) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: favorites,
  }
}

export const removeFromFavorites = (favorite) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: favorite,
  }
}
