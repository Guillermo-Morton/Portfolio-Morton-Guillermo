import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar/NavB';
import FooterComp from './components/common/Footer/FooterComp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/contact/Contact'
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Switch>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      <FooterComp/>
    </Router>
  );
}

export default App;
