import React, { createContext } from 'react'
import { useState } from 'react'

export const UserContext = createContext();

 const UserContextProvider =(props) =>  {
  const [user, setUser] = useState({});
  const [users , setUsers] =useState([]);
  const [logged, setLogged]= useState(false);
  const val ={user , setUser, users, setUsers,logged,setLogged}
  
  return (
  <UserContextProvider value={val}>
    {props.children}
    </UserContextProvider>
  )
}

