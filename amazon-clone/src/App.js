import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51L2dCcIsKU9f2xIxzwIf10Ez7Tg5iKuut7YugkZqpmnhdoBVCjaYTDL1bKfAYnsOwMTYHYMtSYNZLPXh1ZJOtD4j00q5xOHY6E')

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
          <Route path='/orders' element={<><Header/><Orders /></>}/>
          <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>} />
          <Route path='/login' element={<><Login/></>} />
          <Route path='/checkout' element={<><Header/><Checkout/></>} />
          <Route path='/' element={<><Header/><Home/></>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
