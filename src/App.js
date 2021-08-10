import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";
import HeroesContainer from "./components/HeroesContainer/HeroesContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const store = createStore(rootReducer);

console.log(store);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/heroes" component={HeroesContainer} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
