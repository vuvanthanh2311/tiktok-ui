import ReactDOM from 'react-dom/client';
import {Routes, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Routers from './Routers';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='nav'>
        <ul>
          <li>
            <Link to={"/"}> Home page</Link>
          </li>
          <li>
          <Link to={"/about"}> About page</Link>
          </li>
          <li>
          <Link to={"/news"}> News page</Link>
          </li>
        </ul>
      </div>
      <Routers/>
    </div>
  );
}

export default App;
