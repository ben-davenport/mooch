import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
// import HostHome from './Components/Host/HostHome';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Route path="/" component= {NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
