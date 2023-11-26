import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from './Button'
import Dropdown from './Dropdown'

import '../styles/Home.css'

function Navbar() {
  const [ menuClicked, setMenuClicked ] = useState(false)
  const [ dropdown, setDropdown ] = useState(false)
  const [ portfolioMenuActive, setportfolioMenuActive ] = useState(false)
  const [ optionMenuActive, setOptionMenuActive ] = useState(false)

  const handleMenuClick = () => setMenuClicked(!menuClicked)
  const closeMobileMenu = () => setMenuClicked(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>Test</Link>
        <div className='menu-icon' onClick={handleMenuClick}>
          <i className={menuClicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' >
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item' 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
          >
            <Link 
              to='/portfolio' 
              className='nav-links' 
              onClick={closeMobileMenu}
            >
              Portfolios <i className='fas fa-caret-down'/>
            </Link>
            {dropdown && <Dropdown />}
          </li>   
          <li className='nav-item' >
            <Link to='/options' className='nav-links' onClick={closeMobileMenu}>
              Options <i className='fas fa-caret-down'/>
            </Link>
            {optionMenuActive && <Dropdown />}
          </li>               
        </ul>
      </nav>
    </>
  )
}

export default Navbar;