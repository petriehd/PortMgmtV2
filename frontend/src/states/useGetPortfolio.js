import { useState, useEffect } from 'react'
import { requestWrapperGet } from '../requestWrapper'
import Axios from 'axios'

const SERVER = "http://127.0.0.1:5000"

const useGetPortfolio = (userId) => {
  const [ portfolioList, setPortfolioList ] = useState([])

  useEffect(() => {
    ( async () => {
      let data;
      data = await Axios.get(SERVER + `/get-portfolio/${userId}`)
      .then((res) => {
        const assets = res.data.assets
        const assetNames = []
        for (let i = 0; i < assets.length; i++) {
          assetNames.push(assets[i].name);
        }
        setPortfolioList(assetNames)
      })
    })();
  }, [])

  return [portfolioList];
}

export default useGetPortfolio;