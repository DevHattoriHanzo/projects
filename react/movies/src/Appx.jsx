import { createContext, useContext } from "react";
import Menu2 from './components/Menu2'
import UserContext from './UserContext'

const user = "maria"

function App(){
  
  return (
    <UserContext.Provider value={user}>
    </UserContext.Provider>
  );
}




export default App