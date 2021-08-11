import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroesContainer from "./components/HeroesContainer/HeroesContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/heroes" component={HeroesContainer} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
