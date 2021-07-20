import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroesContainer from "./components/HeroesContainer/HeroesContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/heroes">
            <HeroesContainer />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
