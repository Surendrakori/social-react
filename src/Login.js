import React, { useContext, useState } from 'react'
import { UserContext } from './App'
import Register from './Register.js';


export default function Login() {
    const {user ,setUser , logged, setLogged ,users ,setUsers}=useContext(UserContext);
    const [register ,setRegister] =useState(false)

    const handleLogin =()=>{
      const verifyUser =users.find((ele)=>(ele.email===user.email && ele.password===user.password))
      if(verifyUser){
        setLogged(!logged)
      }
    }
  const handleCreateAccount = () =>{
    setRegister (!register)
  }
    
  return (
    <>
    <input type='email' placeholder='Email' onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }/>
        <input type='password' placeholder='Password' onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }/>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleCreateAccount}>Create Account</button>
    {register && (<Register />)}
    </> 
  )
}