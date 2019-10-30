import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="">
      <img class="img-size" src={props.src}></img>
    </div>
  );
}

export default Card;
