import React, { useContext, useState } from "react";

import AuthContext from '../context/authProvider'
import useGetPortfolio from '../states/useGetPortfolio'

import '../styles/Portfolios.css'

const PortfolioDisplay = () => {
  const { auth } = useContext(AuthContext)
  const [ currentPortfolio ] = useGetPortfolio(auth.userId)

  return (
    <>
      <div>
        <p>Current assets for user {auth.userId}</p>
        <ul> {currentPortfolio.map((item) => <li>{item}</li>)}</ul>
      </div>
    </>
  )
}

export default PortfolioDisplay;