import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from '../axios'

import '../styles/Login.css'

const SIGNUP_URL = '/signup-submit'

function Signup() {
  const nameRef = useRef();
  const errRef = useRef();

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ errMsg, setErrMsg ] = useState('')
  const [ success, SetSuccess ] = useState(false)

  let navigate = useNavigate();

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [firstName, lastName, email, password, confirmPassword])

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrMsg('Passwords do not match')
      errRef.current.focus();
      return;
    }

    try {
      const response = await axios.post(SIGNUP_URL,
        JSON.stringify({ 
          first: firstName, 
          last: lastName,
          email: email ,
          password: password
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }      
      );
      SetSuccess(true)
    } catch (err) {
      console.log(err)
      if (!err?.response) {
        setErrMsg('No server response')
      } else if (err.response?.status === 400) {
        setErrMsg(err.response?.data?.error)
      } else {
        setErrMsg('Signup failed. Please try again')
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      <div style={{background: '#ececd9', minHeight: '100vh'}}>
        <div className="main-display">
          <form className="input-form" onSubmit={handleSignupSubmit}>
            <label htmlFor="firstName">First name: </label>
            <input 
              type="text" 
              id="firstName"
              ref={nameRef} 
              autoComplete="off"
              onChange = {(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
            <label htmlFor="lastName">Last name: </label>
            <input 
              type="text" 
              id="lastName" 
              autoComplete="off"
              onChange = {(e) => setLastName(e.target.value)}
              value={lastName}
              required
              />
            <label htmlFor="email">Email: </label>
            <input 
              type="text" 
              id="email"
              autoComplete="off"
              onChange = {(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label htmlFor="password">Password: </label>
            <input 
              type="password" 
              id="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label htmlFor="confirmPassword">Confirm password: </label>
            <input 
              type="password" 
              id="confirmPassword"
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
            <button>Submit</button>
            <p>
            Already have an account? <br />
            <span className="line">
              <a href="/">Login</a>
            </span>
          </p>
          <p ref={errRef} className={errMsg ? "error-message" : "offscreen"} aria-live="assertive">{errMsg}</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup