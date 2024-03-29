import React from 'react';
import Header from "./Header";
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
     
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
