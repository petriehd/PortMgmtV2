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
  const [ errMsg, setErrMsg ] = useState('')
  const [ success, SetSuccess ] = useState(false)

  let navigate = useNavigate();

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [firstName, lastName, email, password])

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

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
      if (!err?.response) {
        setErrMsg('No server response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing input')
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
            <button>Submit</button>
          </form>
          <p>
            Already have an account? <br />
            <span className="line">
              <a href="/login">Login</a>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signup