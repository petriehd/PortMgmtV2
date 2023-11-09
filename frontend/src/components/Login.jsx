import React, { useState } from "react";

import '../styles/Login.css'

const domainUrl = 'http://127.0.0.1:5000/'

function Login() {
  const [usernameInputValue, setUsernameInputValue] = useState('')
  const handleUsernameInputChange = (e) => {
    setUsernameInputValue(e.target.value)
  }

  const [passwordInputValue, setPasswordInputValue] = useState('')
  const handlePasswordInputChange = (e) => {
    setPasswordInputValue(e.target.value)
  }

  const [signinStatusValue, setSigninStatusValue] = useState('')
  const handleLoginButtonClick = () => {

    const url = domainUrl + 'login-submit'

    const payload = {
      usernameInput: usernameInputValue,
      passwordInput: passwordInputValue
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      // These errors dont work atm
      if ('error' in data) {
        if (data['errorCode'] === 1) {
          setSigninStatusValue('User not founds')
        }
        else if (data['errorCode'] === 2) {
          setSigninStatusValue('Password incorrect')
        }
      }
      else {
        // need to add link to new page here
      }
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
  }


  // Can break off all display into its own component
  return (
    <>
      <div className="background">
          <div className="login-main-display">
            <p className="login-main-display-header"> Welcome to _____________</p>
            <p className="login-main-display-user-text"> Username:</p>
            <input className="login-main-display-user-input" 
              type="text"
              id="usernameInput"
              value={usernameInputValue}
              onChange={handleUsernameInputChange}
            />
            <p className="login-main-display-pass-text"> Password:</p>
            <input className="login-main-display-pass-input" 
              type="text"
              id="usernameInput"
              value={passwordInputValue}
              onChange={handlePasswordInputChange}
            />
            <button className="login-main-display-login-button" onClick={handleLoginButtonClick}>Login</button>
            <p className="login-main-display-signin-status-text">{signinStatusValue}</p>
          </div>
      </div>
    </>
  )
}

export default Login