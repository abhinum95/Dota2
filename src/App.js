import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroesContainer from "./components/HeroesContainer/HeroesContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroesContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
