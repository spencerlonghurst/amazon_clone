import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
 
function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('user:', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>

      <div className="app">
        <Routes>
          <Route path='/login' element={<><Login/></>} />
          <Route path='/checkout' element={<><Header/><Checkout/></>} />
          <Route path='/' element={<><Header/><Home/></>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
