import React,{useState, useContext,} from 'react'
import userContext  from '../context/usercontext'



const Login = () => {
    const [username,setUsername]=useState('')
    const [passward,setPassward]=useState('')
    const {setUser} =useContext(userContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,passward})
    }
  return (
    <div>
        <h2>log in</h2>
        <input type="text" 
         value={username}
         onChange={e=>setUsername(e.target.value)}
        placeholder='user name '/>
        <input type="text"  
        value={passward}
        onChange={e=>setPassward(e.target.value)}
        placeholder='passward '/>
        <button onClick={handleSubmit}>login</button>
    </div>
  )
}

export default Login