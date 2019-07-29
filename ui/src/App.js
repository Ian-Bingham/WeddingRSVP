import React, { useGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'



function App() {
  const [user, setUser] = useGlobal('user')

  return (
    <Router>
      <Route exact path='/' exact component={Login} />
      <Route path='/home' render={() => (
        user === null ? <Redirect to='/' />
         : <Home />
      )}/>
    </Router>
  )
}

export default App;
