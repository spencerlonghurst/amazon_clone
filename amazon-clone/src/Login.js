import React, { useState } from 'react'
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()
    //Some Fancy Firebase Login stuff below
  }

  const register = e => {
    e.preventDefault()
    //Some Fancy Firebase Register stuff below
  }

  return (
    <div className='login'>
      <Link to='/'>
      <img
        className='login_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
        alt='Amazon Logo'
      />
      </Link>

      <div className='login_container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

          <button
            className='login_signInButton'
            onClick={signIn}
            type='submit'
          >Sign In</button>
        </form>

        <p>By signing-in you agree to the FAKE AMAZON CLONE Conditions of USE & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>

        <button
        className='login_registerButton'
        onClick={register}
        >
          Create your Amazon Account</button>
      </div>

    </div>
  )
}

export default Login