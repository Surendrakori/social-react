import { useContext } from "react";
import Login from "./Login";
import Home from "./Home";
import { UserContext } from "./UserContext";
// export const UserContext = createContext();

export default function App() {
  const {logged} = useContext(UserContext)
 
  return (
    <>
    {! logged ? <Login />: <Home />}
    </>
  );
}
