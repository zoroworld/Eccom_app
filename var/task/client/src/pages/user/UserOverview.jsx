import React from 'react'
import { useAuth } from '../../context/Auth'

const UserOverview = () => {
  const [auth] = useAuth();
  return (
    <>
      <h1>{auth?.user?.name}</h1>
      <h1>{auth?.user?.email}</h1>
      <h1>{auth?.user?.address}</h1>
    </>
  )
}

export default UserOverview