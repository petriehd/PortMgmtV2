import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import PortfolioLive from "./components/Portfolio-live"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}>   
        </Route>

        <Route exact path='/signup' element={<Signup />}>
        </Route>
            
        <Route exact path="/home" element={ <Home />}>    

        </Route>

        <Route exact path='/portfolio/create-live' element={ <PortfolioLive />}>

        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App;
