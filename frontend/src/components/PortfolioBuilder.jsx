import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import { useUserId } from '../context/userContext';
import useGetPortfolio from '../states/useGetPortfolio';

import '../styles/Home.css';

const SERVER = "http://127.0.0.1:5000"

const Portfoliobuilder = () => {
  const userId = useUserId();
  // need to update below to use correct userId
  const [ portfolioAssets ] = useGetPortfolio(2)
  const [ tickerInputValue, setTickerInputValue ] = useState('')
  const [ tickerStartRangeValue, setTickerStartRangeValue ] = useState('')
  const [ tickerEndRangeValue, setTickerEndRangeValue ] = useState('')

  

  const handleDownloadStockClick = () => {
    const payload = {
      'tick': tickerInputValue,
      'startDate': tickerStartRangeValue,
      'endDate': tickerEndRangeValue
    }
    let data
    try {
      data = Axios.post(SERVER + `/add-stock/${2}`, payload)
    } catch (error) {
      console.log(error)
    } finally {
    }


    // Will do all below after stock successfully downloaded
    // let tempPortfolioAssets = portfolioAssets;
    // tempPortfolioAssets.push(tickerInputValue);
    // setPortfolioAssets(tempPortfolioAssets)
    // setTickerInputValue('')
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
        <ul style={{gridRow:'1/5', gridColumn:'3/4'}}> {portfolioAssets.length > 0 && portfolioAssets.map((item) => <li>{item}</li>)} </ul>
      </div>
    </>
  )
}

export default Portfoliobuilder;