import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import ellipse from '../../images/Ellipse.png'

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Main />
      </div>
      <div className="app__overlay"></div>
      <div className="app__inner-lines"></div>
      <img className="main__ellipse"src={ellipse} alt="Алекс Шевцов"/>
    </div>
  );
}

export default App;
