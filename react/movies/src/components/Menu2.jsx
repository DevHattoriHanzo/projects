import { useContext } from "react";
import UserContext from '../UserContext'

function Menu2() {
  
  const {user,texto} = useContext(UserContext);

  return (
    <>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Menu2