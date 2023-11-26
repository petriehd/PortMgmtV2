import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MenuItems } from './MenuItems'

import '../styles/Home.css'

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li>
          <h1>Testo</h1>
        </li>
        <li>
          <h1>testing</h1>
        </li>
        {/* {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })} */}
      </ul>
    </>
  );
}

export default Dropdown