import { createStore } from 'redux'
import { ADD_FAVORITE } from './actions'

const initialState = {
  favorites: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.track] }
    default:
      return state
  }
}

export const store = createStore(rootReducer)
