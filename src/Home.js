import React , {useContext} from 'react'
import { UserContext } from './UserContext'

export default function Home() {
  const {user, check ,setChecked} =useContext(UserContext);

  return (
    <div> Hello {user.name}
    <button onClick={() => setLogged(!check)}>LogOut</button>
    </div>
  )
}
