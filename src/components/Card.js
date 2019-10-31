import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="diplay-inline-block">
      <img
        onClick={props.pick}
        className="img-size single-img"
        alt={props.name}
        src={props.src}
      ></img>
    </div>
  );
}

export default Card;
