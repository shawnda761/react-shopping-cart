import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import ProductList from "./components/ProductList";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <div className="grid-container">
      <HeaderBar />
      <Route path="/" exact component={ProductList} />
      <FooterBar />
    </div>
  </Router>
);

export default App;
