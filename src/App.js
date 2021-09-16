import './App.css';
import RestrictedPage from './components/RestrictedPage';
import {useState} from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = 'Rafael';

  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage isLoggedIn={isLoggedIn} user={user} login={login} logout={logout} />
      </header>
    </div>
  );
}

export default App;
