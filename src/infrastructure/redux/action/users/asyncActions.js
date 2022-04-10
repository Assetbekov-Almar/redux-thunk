import {fetchUsersError, fetchUsersRequest, fetchUsersSuccess} from "./actions"

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(
        json => dispatch(fetchUsersSuccess(json)),
        error => dispatch(fetchUsersError(error))
      )
  }
}
