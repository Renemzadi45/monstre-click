import React from 'react';
// import "./ClickButton.css"
import ClickButtonBis from './ClickButton';
import ClickButton from './ClickButton';

import Header from './Header';
import './DisplayFinalScore.css';
import RefreshPageButton from './RefreshPageButton';

function DisplayFinalScore(props) {
  const highscore = localStorage.getItem('highscore');
  const bestScore = highscore > props.score ? highscore : props.score;
  let message;
  if (props.score > highscore) {
    message = (
      <div className="gameover">
        <h1>Game Over</h1>
        <p>Congratulations</p>
        <p>You Get The Highest Score: {bestScore} </p>
      </div>
    );
  } else {
    message = (
      <div className="gameover">
        <h1>Game Over</h1>
        <p>The highest score is {bestScore} </p>
        <p>Your Score is:{props.score} </p>
      </div>
    );
  }

  return (
    <div className="DisplayFinalScoreContainer">
      <div>
        <h1 className="title">Monsters & Click</h1>
      </div>
      {message}
      <div className="DisplayFinalScore-Button">
        {' '}
        <RefreshPageButton />
      </div>
    </div>
  );
}

export default DisplayFinalScore;
