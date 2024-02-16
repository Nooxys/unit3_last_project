import { combineReducers, configureStore } from '@reduxjs/toolkit'
import liveSongsReducer from '../reducers/liveSongs'
import favoriteSongsReducer from '../reducers/favoriteSongs'

const globalReducer = combineReducers({
  liveSongs: liveSongsReducer,
  favoriteSongs: favoriteSongsReducer,
})

const store = configureStore({
  reducer: globalReducer,
})

export default store
