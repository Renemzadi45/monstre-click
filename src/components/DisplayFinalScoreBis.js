import React from 'react';
// import "./ClickButton.css"
import ClickButton from './ClickButton';
import ClickButtonBis from './ClickButtonBis';

import Header from './Header';
import './DisplayFinalScore.css';

function DisplayFinalScore(props) {
  return (
    <div className="DisplayFinalScoreContainer">
      <div> <h1 className="title">Monsters & Click</h1> </div>
    <div className="gameover">
      <h1>Game Over</h1>
      <p>Your Score is :{props.score} </p>
      <span>Try Again!</span>
    </div>
    <div className="DisplayFinalScore-Button"> <ClickButtonBis/> </div>
    </div>

  );
}

export default DisplayFinalScore;
