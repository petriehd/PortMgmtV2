import Navbar from "./Navbar";
import PortfolioBuilder from "./PortfolioBuilder";
import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className="navbar"><Navbar /></div>
      <div className="grid-container">
        <div><PortfolioBuilder /></div>
      </div>
    </>
  )
}

export default Home