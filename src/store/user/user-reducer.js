

import { USER_ACTION_TYPES } from './user-types'

const INICIAL_STATE = () => {
  currentUser: null

}


export const userReducer = (state = INICIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, currentUser: payload
      }

    default:
      return state
  }

}