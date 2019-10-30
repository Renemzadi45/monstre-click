import React from 'react';

function Card(props) {
  return (
    <div className="ui three column grid">
      {/* <div className="column">
        <div className="ui segment">
          
          <div className="content">
            <a className="header"> {props.name}</a>
          </div>
        </div>
      </div> */}
      <div className="image">
        <img class="ui medium circular image" src={props.src} />
        {/* <img src={props.src} /> */}
      </div>
    </div>
  );
}

export default Card;
