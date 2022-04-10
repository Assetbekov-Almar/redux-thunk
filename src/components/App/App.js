import React, { useEffect } from 'react'
import './App.css'
import {connect} from 'react-redux'
import { fetchUsers } from "../../infrastructure/redux/action/users/asyncActions"

function App(props) {
  const { loading, error, users, fetchUsers } = props

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) return <div>loading...</div>


  if (error) return <div>error...</div>

  return (
    <div>
      {users?.data?.map(user => <div key={user.id}>{user.first_name}</div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.users.loading,
    error: state.users.error,
    users: state.users.users
  }
}

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
