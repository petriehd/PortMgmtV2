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
      // Handle the response data here
      console.log('Data from backend:', data);
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
          </div>
      </div>
    </>
  )
}

export default Login