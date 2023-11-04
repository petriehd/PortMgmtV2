import Header from "./Header";
import StockTickerInput from "./StockDownload";
import PortfolioDisplay from "./PortfolioDisplay";
import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item-header"><Header /></div>
        <div className="grid-item-ticker-input"><StockTickerInput /></div>
        <div className="grid-item-portfolio-display"><PortfolioDisplay /></div>
      </div>
    </>
  )
}

export default Home