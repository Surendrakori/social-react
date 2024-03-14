import React, { useContext } from 'react'
import { UserContext } from './App'
import './Register.css'

const Register = () => {
    const {user, setUser, check, setChecked, users, setUsers}=useContext(UserContext);
    const handleRegister = () => {
      setUsers((prev) => [...prev, user])
      console.log(users);
      // setUser('')
      setLogged(!check)
      // setUser('')
  }



  return (
    <>
    <div className='Register-model'>
    <div className='Register-model-content'>
    <div className="Rigister-header">
          <div className="Register-signup-title">Register</div>
          <div className="close">
            &times;
          </div>
        </div>
        <input type="text" onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }></input>
          <br></br>
          <input type="email" onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }></input>
          <br></br>
          <input type="password" onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }></input>
          <br></br>
    <button onClick={handleRegister}>Register and Login</button>
    </div>
    </div>
    </>
  )
}
export default Register