import React, { useState, useEffect } from 'react';
import './styles/index.scss';
import './App.css';
import {List} from './modules';
import {Tile} from './modules';
import {Photo} from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
const bootstrap = require('bootstrap')
function App() {
  const [item, setItem] = useState({
    loading: false,
    result: null,
  });

  function modalHide() {
    let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'))
      myModal.hide()
}

  useEffect(() => {
    setItem({ loading: true });
    
      fetch("https://api.unsplash.com/photos/?client_id=YquLBHog2Me6UYxS2QBXNVFHP_1Lwpy2LlIdhnWQ82o")
      .then(res =>res.json())
      .then(
        (result) => {
          setItem({loading: false,
                      result: result});
        console.log(item);
        },)
  }, [setItem] );
  
  return (
    <Router>
      <div className="App">
        <div className="main">
        
          <header className='main__header'>
            <Link to="/">
              <div className='header__nav-list'><svg width="50" height="50" viewBox="0 0 24 24"  fill="none"
                xmlns="http://www.w3.org/2000/svg">  <path  fillRule="evenodd"  clipRule="evenodd" fill="#DF4D41"
                d="M20 4H4C3.44771 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44771 20.5523 4 20 4ZM4 2C2.34315 2 1 3.34315 1 5V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34315 21.6569 2 20 2H4ZM6 7H8V9H6V7ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H11ZM8 11H6V13H8V11ZM10 12C10 11.4477 10.4477 11 11 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H11C10.4477 13 10 12.5523 10 12ZM8 15H6V17H8V15ZM10 16C10 15.4477 10.4477 15 11 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H11C10.4477 17 10 16.5523 10 16Z" />
                </svg>
              </div>
            </Link>
            <Link to="/tile">
              <div className='header__nav-tile'><svg width="50" height="50" viewBox="0 0 24 24" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H11V11H3V3Z" fill="#DF4D41" /> <path d="M3 13H11V21H3V13Z" fill="#DF4D41" />
                <path d="M13 3H21V11H13V3Z" fill="#DF4D41" /> <path d="M13 13H21V21H13V13Z" fill="#DF4D41" /> </svg>
              </div>
            </Link>
          </header>
          <div className='main__body'>
            <Routes>
            <Route path="/" element={<List item={item.result} />} />
            <Route path="tile" element={<Tile item={item.result}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
