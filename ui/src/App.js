import React, { setGlobal } from 'reactn';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import whitelist from './data/whitelist'
import Login from './pages/Login'
import Home from './pages/Home'

setGlobal({
  user: whitelist[0],
  modalOpen: false
})

function App() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      <Route path='/home' component={Home} />
    </Router>
  )
}

export default App;
