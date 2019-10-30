import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="diplay-inline-block" >
      <img class="img-size single-img" alt={props.name} src={props.src}></img>
    </div>
  );
}

export default Card;
