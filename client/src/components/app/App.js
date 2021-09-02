
import { useEffect, useState } from 'react';
import FooterContainer from '../footer/FooterContainer';
import HeaderContainer from '../header/HeaderContainer';
import Main from '../main/Main';
import './App.scss';

function App() {

  let [active, setActive] = useState(false)

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
