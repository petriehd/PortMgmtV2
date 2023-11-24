import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useUpdateUserId } from "../context/userContext";
import AuthContext from "../context/authProvider";
import axios from '../axios';

import '../styles/Login.css'

const LOGIN_URL = '/login-submit'

function Login() {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();

  const [ userName, setUserName] = useState('')
  const [ userPassword, setUserPassword ] = useState('')
  const [ errMsg, setErrMsg ] = useState('')

  let navigate = useNavigate();

  const updateUserId = useUpdateUserId();

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [userName, userPassword])

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({ user: userName, password: userPassword }),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      const accessToken = response?.data?.accessToken;
      setAuth({ userName, userPassword, accessToken })
      setUserName('');
      setUserPassword('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing username or password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unathorized')
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
          <p ref={errRef} className={errMsg ? "error-message" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="userName">Username:</label>
            <input 
              type="text" 
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
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
                { /* Router link here */ }
                <a href="#">Sign up</a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  )

  // Can break off all display into its own component
  // return (
  //   <>
  //     <div className="background">
  //         <div className="login-main-display">
  //           <p className="login-main-display-header"> Welcome to _____________</p>
  //           <p className="login-main-display-user-text"> Username:</p>
  //           <input className="login-main-display-user-input" 
  //             type="text"
  //             id="usernameInput"
  //             value={usernameInputValue}
  //             onChange={handleUsernameInputChange}
  //           />
  //           <p className="login-main-display-pass-text"> Password:</p>
  //           <input className="login-main-display-pass-input" 
  //             type="text"
  //             id="usernameInput"
  //             value={passwordInputValue}
  //             onChange={handlePasswordInputChange}
  //           />
  //           <button className="login-main-display-login-button" onClick={handleLoginButtonClick}>Login</button>
  //           <p className="login-main-display-signin-status-text">{signinStatusValue}</p>
  //         </div>
  //     </div>
  //   </>
  // )
}

export default Login