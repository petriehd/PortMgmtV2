import React, { useState, useEffect } from 'react';
import { useUserId } from '../context/userContext';
import { GetRequest } from '../requestWrapper';
import Axios from 'axios'

import '../styles/Home.css';

const SERVER = "http://127.0.0.1:5000"



const Portfoliobuilder = () => {
  const userId = useUserId();
  const [ portfolioObject, setPortfolioObject ] = useState('')
  const [ tickerInputValue, setTickerInputValue ] = useState('')
  const [ tickerStartRangeValue, setTickerStartRangeValue ] = useState('')
  const [ tickerEndRangeValue, setTickerEndRangeValue ] = useState('')


  useEffect(() => {
    (async () => {
      let data
      try {
        data = await Axios.get(SERVER + `/get-portfolio/${1}`)
      } catch (error) {
        console.log(error)
      } finally {
        // Will need to update to include all 
        setPortfolioObject(data.data.name)
      }   
    })();
  }, [])

  const handleDownloadStockClick = () => {
    
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
          style={{gridColumn: '2/3'}}
          id='startRangeInput'
          value={tickerStartRangeValue}
        />
        <label style={{gridColumn:'1/2'}}>Enter end date: </label>
        <input 
          style={{gridColumn:'2/3'}}
          id='endRangeInput'
          value={tickerEndRangeValue}
        />
        <button className='grid-item-download-button' onClick={handleDownloadStockClick} >Download</button>
        <p className="grid-item-portfolio-display-header">Current Assets for user {userId}</p>
        <li >{portfolioObject}</li>
      </div>
    </>
  )
}

export default Portfoliobuilder;