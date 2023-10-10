import React from 'react'
import { useAuth } from '../context/Context'

const Profile = () => {
    const [auth] = useAuth()
  return (
    <div>
      <pre>{JSON.stringify(auth,null ,4)}</pre>
    </div>
  )
}

export default Profile
