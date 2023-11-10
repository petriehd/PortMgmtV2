import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

import Home from "./components/Home"
import Login from "./components/Login"
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <>
    <Router>
      <UserProvider value={null}>
        <Routes>
          <Route exact path='/' element={<Login />}>   
          </Route>
            
          <Route exact path="/home" element={ <Home />}>     
          </Route>

        </Routes>
      </UserProvider>
    </Router>
    </>
  )
}

export default App;
