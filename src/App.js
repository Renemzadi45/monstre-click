import React from 'react';
import CardList from './components/CardList';
import './App.css';
import Header from './components/Header'
import ClickButton from './components/ClickButton';
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

        <Header/>

        Happy Halloween
<Switch>
  <Route path='/startgame' component={Home} />
</Switch>

        <ClickButton />
        <CardList/>

    </div>
  );
}

export default App;
