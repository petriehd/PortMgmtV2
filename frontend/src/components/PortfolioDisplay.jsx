import { useState, useEffect } from 'react';
import Axios from 'axios' 

import '../styles/Home.css'

const domainUrl = 'http://127.0.0.1:5000/'

function PortfolioDisplay() {
  const [ portfolioObject, setPortfolioObject ] = useState('')
  useEffect(() => {
    Axios.get(domainUrl + `get-portfolio/${1}`)
    .then(function (response) {
      console.log(response)

      // This causes useEffect to rerender twice
      setPortfolioObject(response.data.name)
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      
    })
  }, [])

  return (
    <>
      <p className="portfolio-display-header">Current Assets</p>
      <li>{portfolioObject}</li>
    </>
  )
}

export default PortfolioDisplay;