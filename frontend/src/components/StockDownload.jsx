import React, { useState } from 'react';
import '../styles/StockDownload.css';
import SendRequest from '../requestWrapper'; 

function StockTickerInput() {
  const [tickerInputValue, setTickerInputValue, tickerStartDateValue, tickerEndDateValue, test, setTest ] = useState('');

  const handleDownloadStockClick = () => {
    const payload = {
      tickerInputValue,
      tickerStartDateValue,
      tickerEndDateValue
    }

    SendRequest('/test', 'POST', payload)
    .then((response) => {
      setTest(response);
    })
    
  };

  const handleTickerInputChange = (e) => {
    setTickerInputValue(e.target.value);
  };

  return (
    <>
      <div className='grid-container-stock-download'>
        <label className='grid-item-input-label' htmlFor="tickerInput-input"> Enter Ticker code: </label>
        <input 
          className='grid-item-input-field' 
          type="text" 
          id="tickerInput"
          value={tickerInputValue} 
          onChange={handleTickerInputChange}
        />
        <label className='grid-item-start-label'>Enter start date: </label>
        <input 
          type="date"
          id="dateStartInput"
          value={tickerStartDateValue}
        />
        <label className='grid-item-end-label'>Enter end date: </label>
        <input 
          type="date" 
          id="dateEndInput"
          value={tickerEndDateValue}
        />
        <button className='grid-item-download-button' onClick={handleDownloadStockClick}>Download</button>
        <p>asd{test}</p>
      </div>
    </>
  )
}


export default StockTickerInput;