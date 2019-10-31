import React from 'react';
// import "./ClickButton.css"
import ClickButton from './ClickButton';
import Header from './Header';
import './DisplayFinalScore.css';
import RefreshPageButton from './RefreshPageButton';

function DisplayFinalScore(props) {
  const highscore = localStorage.getItem('highscore');
  const bestScore = highscore > props.score ? highscore : props.score;

  return (
    <div className="DisplayFinalScoreContainer">

      <div>
        {' '}
        <h1 className="title">Monsters & Click</h1>{' '}
      </div>
      <div className="gameover">
        <h1>Game Over</h1>
        <p>The highest score is {bestScore} </p>
        <p>Your Score is :{props.score} </p>
      </div>
    <div className="DisplayFinalScore-Button"> <RefreshPageButton/> </div>
        {' '}
       {' '}
      </div>
    </div>
  );
}

export default DisplayFinalScore;
