import React, { useState, useEffect, useContext, useRef } from 'react'

import axios from '../axios'
import AuthContext from '../context/authProvider'
import { CheckDatesValid } from '../logic/portfolioBuilder'

import Navbar from './Navbar'
import PortfolioDisplay from './Portfolio-display'

import '../styles/Portfolios.css'

const DOWNLOAD_URL = `/download-stock/`
const GET_PORTFOLIO_URL = '/get-portfolio/'

const PortfolioLive = () => {
  const { auth } = useContext(AuthContext)
  const errRef = useRef();

  const [ tickInput, setTickInput ] = useState('')
  const [ tickStartDate, setTickStateDate ] = useState('')
  const [ tickEndDate, setTickEndDate ] = useState('')
  const [ errMsg, setErrMsg ] = useState('')
  const [ currentPortfolio, setCurrentPortfolio ] = useState([])

  console.log('logged in with: ', userId)

  useEffect(() => {
    setErrMsg('')
  }, [ tickInput, tickStartDate, tickEndDate ])

  const fetchPortfolio = async () => {
    try { 
      const response = await axios.get(GET_PORTFOLIO_URL + `${userId}`,
          {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
          }
        );
        const assets = response.data.assets
        const assetNames = assets.map((asset) => asset.name);
        setCurrentPortfolio(assetNames)
      } 
    catch {

    }
  }

  const handleDownloadClick = async () => {
    if (!CheckDatesValid(tickStartDate, tickEndDate)) {
      setErrMsg('Dates not valid')
      return;
    }
    try {
      const response = await axios.post(DOWNLOAD_URL + `${userId}`, 
        JSON.stringify({
          tick: tickInput,
          startDate: tickStartDate,
          endDate: tickEndDate
        }),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      //fetchPortfolio()
    } catch {

    } 
  }

  return (
    <>
      <Navbar />
      <div className='portfolio-live-main'>
        <form className='input-form' onSubmit={handleDownloadClick}>
          <label htmlFor='tickCode'>
            Enter ticker: 
            <input 
            type="text" 
            id="ticker"
            autoComplete='off'
            onChange={(e) => setTickInput(e.target.value)}
            value={tickInput}
            required  
          />
          </label>
          <label htmlFor="tickStartDate">
            Enter start date: 
            <input 
            type="date" 
            id="tickStartDate" 
            onChange={(e) => setTickStateDate(e.target.value)}
            value={tickStartDate}
            required
          />
          </label>
          <label htmlFor='tickEndDate'>
            Enter end date:
            <input
              type='date'
              id='tickStartDate'
              onChange={(e) => setTickEndDate(e.target.value)}
              value={tickEndDate}
              required
            />
          </label>
          <button>Download</button>
          <p ref={errRef} className={errMsg ? 'error-message' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
        </form>


      </div>
      <div className='portfolio-display'>
        <p>Current assets for user {auth.userId}</p>
        <ul> {currentPortfolio.map((item) => <li>{item}</li>)}</ul>
      </div>

    </>
  )

}

export default PortfolioLive
