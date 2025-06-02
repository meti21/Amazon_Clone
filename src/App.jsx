import Routing from './Routing'
import { useContext,useEffect } from 'react'
import { DataContext } from './Components/DataProvider/DataProvider'
import { Type } from './Utility/action.type'
import { auth } from './Utility/firebase'


function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  // Listen for Firebase auth state changes and set the global user; without this, our app won't remember logged-in users after refresh or route change.
  useEffect(() => {
    return auth.onAuthStateChanged((authUser) => {
      dispatch({
        type: Type.SET_USER_KEY,
        user: authUser || null,
      });
    });
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App
