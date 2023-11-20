import React,{useContext} from 'react'
import userContext from '../context/usercontext'


const Profile = () => {
    const {user}=useContext(userContext)

    if(!user) return <h2>please login</h2>
  return (
    <div>welcome {user.username}</div>
  )
}

export default Profile