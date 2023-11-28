import React, { useState, useEffect, useContext, useRef } from 'react'

import axios from '../axios'
import AuthContext from '../context/authProvider'
import useGetPortfolio from '../states/useGetPortfolio'
import { CheckDatesValid } from '../logic/portfolioBuilder'

import '../styles/portfolios.css'

const DOWNLOAD_URL = '/download-stock'

const PortfolioLive = () => {
  const { auth } = useContext(AuthContext)
  const [ currentPortfolio ] = useGetPortfolio(auth.userId)
  const errRef = useRef();

  const [ tickInput, setTickInput ] = useState('')
  const [ tickStartDate, setTickStateDate ] = useState('')
  const [ tickEndDate, setTickEndDate ] = useState('')
  const [ errMsg, setErrMsg ] = useState('')

  console.log('logged in with: ', auth.userId)

  useEffect(() => {
    setErrMsg('')
  }, [ tickInput, tickStartDate, tickEndDate ])

  const handleDownloadClick = async () => {
    if (!CheckDatesValid(tickStartDate, tickEndDate)) {
      setErrMsg('Dates not valid')
      return;
    }
    try {
      const response = await axios.post(DOWNLOAD_URL, 
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
    } catch {

    } 
  }

  return (
    <>
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


        <div className='portfolio-display'>

        </div>
      </div>

    </>
  )

}
