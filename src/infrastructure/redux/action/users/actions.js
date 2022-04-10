import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "./actionTypes"

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
})

export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload
})

export const fetchUsersError = (payload) => ({
  type: FETCH_USERS_ERROR,
  payload
})