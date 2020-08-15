import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GameField from "./components/GameField";
import StartWindow from "./components/StartWindow";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* <Router>
                <Route path="/game">
                    <GameField />
                </Route>
                <Route exact path="/"> */}
                    <StartWindow />
                {/* </Route>
            </Router> */}
        </div>
    );
}

export default App;
