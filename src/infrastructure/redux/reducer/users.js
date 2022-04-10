import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../action/users/actionTypes"

const initialState = {
  loading: false,
  error:  null,
  users: []
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        loading: true,
        error: null,
        users: []
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: action.payload
      }

    case FETCH_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
        users: []
      }

    default:
      return state
  }
}

export default users