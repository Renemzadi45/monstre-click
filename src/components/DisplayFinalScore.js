import React from 'react';
// import "./ClickButton.css"
import ClickButton from './ClickButton';
import Header from './Header'
import './DisplayFinalScore.css'

function DisplayFinalScore(props) {
  return (
    <div>
      <div> <h1>Monsters & Click
</h1> </div>
    <div className="gameover">
      <h1>Game Over</h1>
      <span>Please insert coin</span>
      <p>Your Score is :{props.score} </p>
    </div>
    <div> <ClickButton/> </div>
    </div>

  );
}

export default DisplayFinalScore;
