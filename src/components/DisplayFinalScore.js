import React from 'react';
import './DisplayFinalScore.css'

function DisplayFinalScore(props) {
  return (
    <div className="gameover">
      <h1>Game Over</h1>
      <span>Please insert coin</span>
      <p>Your Score is :{props.score} </p>
    </div>
  );
}

export default DisplayFinalScore;
