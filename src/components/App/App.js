import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Popup } from '../Popup/Popup';
import { InfoToolTip } from '../InfoToolTip/InfoToolTip';
import ellipse from '../../images/Ellipse.png'
import { useState } from 'react';

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  function handleCallbackClick() {
    setIsPopupOpen(true)
  }

  function handleCloseAllPopups() {
    setIsInfoOpen(false)
    setIsPopupOpen(false)
  }

  function handleConfirmCallBack(name, tel) {
    localStorage.setItem(`name - ${name}`, name) // здесь я не очень понял по тз что нужно сохнранять и каим образом
    localStorage.setItem(`${name} telephon - ${tel}`, tel) // по этому сохраняю все введенные данные
    setIsInfoOpen(true)
  }

  return (
    <div className="app">
      <div className={`app__wrapper ${isPopupOpen ? 'app__wrapper_opened' : ''}`}>
        <Header />
        <Main 
        onCallbackClick={handleCallbackClick}
        />
      </div>
      <Popup
      isOpen={isPopupOpen}
      onClose={handleCloseAllPopups}
      confirmCallBack={handleConfirmCallBack}
      />
      <InfoToolTip
      isOpen={isInfoOpen}
      onClose={handleCloseAllPopups}
      />
      <div className="app__overlay"></div>
      <div className="app__inner-lines"></div>
      <img className="main__ellipse" src={ellipse} alt="Алекс Шевцов"/>
    </div>
  );
}

export default App;
