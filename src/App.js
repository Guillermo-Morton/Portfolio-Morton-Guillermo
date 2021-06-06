import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar/NavB';
import FooterComp from './components/common/Footer/FooterComp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <FooterComp/>
    </Router>
  );
}

export default App;
