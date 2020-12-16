import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";


function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        {/*<Route path={'/products'} component={Products} />
        <Route path={'/sign-up'} component={SignUp} />*/}
      </Switch>
    </Router>
    </>
  )
}

export default App;
