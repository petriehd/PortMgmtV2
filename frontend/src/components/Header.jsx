import React, { useState } from "react"
import '../styles/Header.css'

function Header() {
  const [loginStatusValue, setLoginStatusValue] = useState('Not logged in');
  const [loginButtonValue, setLoginButtonValue] = useState('Login')

  const handleLoginClick = () => {
    

    setLoginStatusValue('Logged in')
    setLoginButtonValue('logout')
  }

  return (
    <>
      <div className='container-header'>
          <h1 className='item-header-banner'>Welcome</h1>
          <p className='item-logged-in-status'>{loginStatusValue}</p>
          <button className='item-login-button' onClick={handleLoginClick}>{loginButtonValue}</button>
      </div>
    </>
  )
}

export default Header;