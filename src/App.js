import React from 'react';
import CardList from './components/CardList';
import CardListBis from './components/CardList';

import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"

function App() {
  return (
    <div className="">
  
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/startgame' component={CardList} />
      <Route path='/newgame' component={CardListBis} />

      </Switch>

    </div>
  );
}

export default App;
