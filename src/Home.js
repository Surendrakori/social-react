import React , {useContext} from 'react'
import { UserContext } from './userContext'

export default function Home() {
  const {user, logged ,setLogged} =useContext(UserContext);

  return (
    <div> Hello {user.name}
    <button onClick={() => setLogged(!logged)}>LogOut</button>
    </div>
  )
}