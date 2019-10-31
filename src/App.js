import React from 'react';
import CardList from './components/CardList';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"

function App() {
  return (
    <div className="App">
  
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/startgame' component={CardList} />
      </Switch>

    </div>
  );
}

export default App;
