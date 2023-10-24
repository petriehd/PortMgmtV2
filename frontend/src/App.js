import Header from "./components/Header";
import StockTickerInput from "./components/StockDownload";
import PortfolioDisplay from "./components/PortfolioDisplay";
import './styles/App.css'

function App() {
  return (
  <div className="grid-container">
    <div className="grid-item-header"><Header /></div>
    <div className="grid-item-ticker-input"><StockTickerInput /></div>
    <div className="grid-item-portfolio-display"><PortfolioDisplay /></div>
  </div>
  )
}

export default App;
