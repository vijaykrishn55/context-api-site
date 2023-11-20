import React, { useState } from 'react';
import userContext from './usercontext';

const userContextProvider=(props)=>{

const [user, setUser] = useState(null)

return(
    <userContext.Provider value={{user,setUser}}>
    {props.children}
    </userContext.Provider>
)
}
export default userContextProvider