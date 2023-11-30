import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/authProvider";
import axios from '../axios';

import '../styles/Login.css'

const LOGIN_URL = '/login-submit'

function Login() {
  const { auth, setAuth } = useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();

  const [ userEmail, setUserEmail] = useState('')
  const [ userPassword, setUserPassword ] = useState('')
  const [ errMsg, setErrMsg ] = useState('')

  let navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [userEmail, userPassword])

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({ email: userEmail, password: userPassword }),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      const accessToken = response?.data?.accessToken;
      const userId = response?.data?._id
      setAuth({ userId, userPassword, accessToken })
      navigate('/home')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing email or password')
      } else if (err.response?.status === 401) {
        setErrMsg('Email or password is incorrect')
      } else {
        setErrMsg('Login failed')
      }
      errRef.current.focus();
    }
  }


  return (
    <>
      <div style={{background: '#ececd9', minHeight: '100vh'}}>
        <div className="main-display">
          <form className="input-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="userEmail">Email:</label>
            <input 
              type="text" 
              id="userEmail"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              required
            />
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
              required
            />
            <button>Login</button>
            <p>
              Haven't got an account? <br />
              <span className="line">
                <a href="/signup">Sign up</a>
              </span>
            </p>
            <p ref={errRef} className={errMsg ? "error-message" : "offscreen"} aria-live="assertive">{errMsg}</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login