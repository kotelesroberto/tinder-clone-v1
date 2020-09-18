import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/chat">
            <h1>CHAT</h1>
          </Route>
          <Route path="/">
            {/* Tinder Cards */}
            <TinderCards />
          </Route>
        </Switch>

        {/* Buttons */}

        {/* Chats */}
        {/* Individual Chat screen */}
      </div>
    </Router>
  );
}

export default App;
