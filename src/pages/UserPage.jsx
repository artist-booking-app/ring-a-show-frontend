
import { useContext } from 'react';
import {AuthContext} from '../context/auth.context';
import Favourites from '../components/Favourites';
useContext

function UserPage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>UserPage</h1>
      {user ? <p>User Name : {user.userName }</p> : <p>loading?</p>}

    </div>
  );
}

export default UserPage;
