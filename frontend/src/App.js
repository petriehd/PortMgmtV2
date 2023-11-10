import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home"
import Login from "./components/Login"



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}>   
        </Route>
          
        <Route exact path="/home" element={ <Home />}>     
        </Route>

      </Routes>
    </Router>
    </>
  )
}

export default App;
