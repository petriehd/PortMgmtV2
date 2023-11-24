import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios'

import { useUserId } from '../context/userContext';
import useGetPortfolio from '../states/useGetPortfolio';
import { CheckDatesValid } from '../logic/portfolioBuilder';
import AuthContext from '../context/authProvider';

import { SERVER } from '../config'

import '../styles/Home.css';


const Portfoliobuilder = () => {
  const { auth } = useContext(AuthContext)
  console.log(auth)
  const userId = useUserId();
  // need to update below to use correct userId
  const [ portfolioAssets ] = useGetPortfolio(auth.userId)
  const [ tickerInputValue, setTickerInputValue ] = useState('')
  const [ tickerStartRangeValue, setTickerStartRangeValue ] = useState('')
  const [ tickerEndRangeValue, setTickerEndRangeValue ] = useState('')

  

  const handleDownloadStockClick = () => {

    
  if (!CheckDatesValid(tickerStartRangeValue, tickerEndRangeValue)) { /* Need to output something if false */ return}

    const payload = {
      'tick': tickerInputValue,
      'startDate': tickerStartRangeValue,
      'endDate': tickerEndRangeValue
    }
    Axios.post(SERVER + `/add-stock/${2}`, payload)
    .then((res) => {

    })
  };

  return (
    <>
      <div className='grid-container-portfolio-builder'>
        <label style={{gridColumn: '1/2'}}>Enter stock ticker: </label>
        <input 
          style={{gridColumn: '2/3'}}
          type='text'
          id='tickerInput'
          value={tickerInputValue}
          onChange={(e) => setTickerInputValue(e.target.value)}
        />
        <label style={{gridColumn:'1/2'}}>Enter start date: </label>
        <input 
          type='date'
          style={{gridColumn: '2/3'}}
          id='startRangeInput'
          value={tickerStartRangeValue}
          onChange={(e) => setTickerStartRangeValue(e.target.value)}
        />
        <label style={{gridColumn:'1/2'}}>Enter end date: </label>
        <input 
          type='date'
          style={{gridColumn:'2/3'}}
          id='endRangeInput'
          value={tickerEndRangeValue}
          onChange={(e) => setTickerEndRangeValue(e.target.value)}
        />
        <button className='grid-item-download-button' onClick={handleDownloadStockClick} >Download</button>
        <p className="grid-item-portfolio-display-header">Current Assets for user {userId}</p>
        <ul className='grid-item-portfolio-display-list'> {portfolioAssets.length > 0 && portfolioAssets.map((item) => <li>{item}</li>)} </ul>
      </div>
    </>
  )
}

export default Portfoliobuilder;