import Navbar from "./Navbar";
import StockTickerInput from "./StockDownload";
import PortfolioDisplay from "./PortfolioDisplay";
import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className="navbar"><Navbar /></div>
      <div className="grid-container">
        <div className="grid-item-ticker-input"><StockTickerInput /></div>
        <div className="grid-item-portfolio-display"><PortfolioDisplay /></div>
      </div>
    </>
  )
}

export default Home