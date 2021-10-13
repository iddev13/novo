import { useEffect, useState } from 'react';
import FooterContainer from '../footer/FooterContainer';
import HeaderContainer from '../header/HeaderContainer';
import Main from '../main/Main';
import './App.scss';

function App({ token, login, logout, userId, isAuthenticated }) {
  // App wrapper animation
  let [active, setActive] = useState(false)

  // auth
  const isAuth = !!token;

  useEffect(() => {
    const appActive = () => {
      setActive(true);
    }
    appActive();
  }, [])

  return (
    <div className={`App ${active ? 'active' : ''}`}>
      <HeaderContainer />
      <Main />
      <FooterContainer />
    </div>
  );
}

export default App;
