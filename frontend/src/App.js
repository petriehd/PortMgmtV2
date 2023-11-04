import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home"
import Login from "./components/Login"



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
          
        </Route>
        <Route path="/home" element={ <Home />}>
            
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App;
