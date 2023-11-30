import React, { useContext, useState, useEffect } from "react";

import AuthContext from '../context/authProvider'
import axios from "../axios";

import '../styles/Portfolios.css'

const GET_PORTFOLIO = '/get-portfolio/'

const PortfolioDisplay = () => {
  const { auth } = useContext(AuthContext)
  const [ currentPortfolio, setCurrentPortfolio ] = useState([])

  useEffect(() => {
    const a = async () => {
      try {
        const response = axios.get(GET_PORTFOLIO + `${auth.userId}`,
          {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
          }
        );
        const assets = response.data.assets
        const assetNames = []
        for (let i = 0; i < assets.length; i++) {
          assetNames.push(assets[i].name);
        }
        setCurrentPortfolio(assetNames)
      } catch {
  
      }
    }
  })

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