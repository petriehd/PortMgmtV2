import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PortfolioDropdown from './navbar/PortfolioDropdown'
import OptionDropdown from './navbar/OptionDropdown'

import '../styles/Home.css'

function Navbar() {
  const [ menuClicked, setMenuClicked ] = useState(false)
  const [ portDropdown, setPortDropdown ] = useState(false)
  const [ optDropdown, setOptDropdown ] = useState(false)
  /* Unsure if below is needed */
  const [ portfolioMenuActive, setportfolioMenuActive ] = useState(false)
  const [ optionMenuActive, setOptionMenuActive ] = useState(false)

  const handleMenuClick = () => setMenuClicked(!menuClicked)
  const closeMobileMenu = () => setMenuClicked(false);

  const onMouseEnterPort = () => {
    window.innerWidth < 960 ? setPortDropdown(false) : setPortDropdown(true)
  };
  const onMouseLeavePort = () => {
    window.innerWidth < 960 ? setPortDropdown(false) : setPortDropdown(false)
  };

  const onMouseEnterOpt = () => {
    window.innerWidth < 960 ? setOptDropdown(false) : setOptDropdown(true)
  };
  const onMouseLeaveOpt = () => {
    window.innerWidth < 960 ? setOptDropdown(false) : setOptDropdown(false)
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
              onMouseEnter={onMouseEnterPort}
              onMouseLeave={onMouseLeavePort}
          >
            <Link 
              to='/portfolio' 
              className='nav-links' 
              onClick={closeMobileMenu}
            >
              Portfolios <i className='fas fa-caret-down'/>
            </Link>
            {portDropdown && <PortfolioDropdown />}
          </li>   
          <li className='nav-item' 
              onMouseEnter={onMouseEnterOpt}
              onMouseLeave={onMouseLeaveOpt}
          >
            <Link 
              to='/options' 
              className='nav-links' 
              onClick={closeMobileMenu}
            >
              Options <i className='fas fa-caret-down'/>
            </Link>
            {optDropdown && <OptionDropdown />}
          </li>               
        </ul>
      </nav>
    </>
  )
}

export default Navbar;