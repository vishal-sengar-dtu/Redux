import logo from './logo.svg';
import './App.css';
import Postform from './components/Postform';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Redux Tutorial
        </p>
      </header>
      <Postform />
      <br />
      <Posts />
    </div>
  );
}

export default App;
