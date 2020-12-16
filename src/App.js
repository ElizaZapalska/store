import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";


function App() {
  return (
  <>
    <Router>
      <Navbar />
    </Router>
    </>
  )
}

export default App;