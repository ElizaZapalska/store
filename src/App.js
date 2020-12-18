import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Products from "./Components/pages/Products";
import Login from "./Components/pages/Login";
import AboutUs from "./Components/pages/AboutUs";
import Basket from "./Components/pages/Basket";

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={'/products-page'} component={Products} />
        <Route path={'/login-page'} component={Login} />
        <Route path={'/aboutus-page'} component={AboutUs} />
        <Route path={'/basket-page'} component={Basket} />
      </Switch>
    </Router>
    </>
  )
}

export default App;
