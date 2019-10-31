import React, { Component } from 'react';
import Card from './Card';
import Header from "./Header";

export class CardList extends Component {
  state = {
    monsters: [],
    monster: {},
    score: 0
  };

  getMonsterToDisplay = () => {
    let item = this.state.monsters[
      Math.floor(Math.random() * this.state.monsters.length)
    ];
    return this.setState({ monster: item });
  };

  getMovies = () => {
    fetch('https://hackathon-wild-hackoween.herokuapp.com/monsters')
      .then(res => res.json())
      .then(res => res.monsters.filter((elt, ind) => ind < 12))
      .then(response => this.setState({ monsters: response }))
      .then(data => this.getMonsterToDisplay());
  };

  componentDidMount() {
    this.getMovies();
  }

  onHandleClick = e => {
    console.log(e.target);
    if (e.target.src === this.state.monster.picture) {
      console.log('youpi');
      this.setState({ score: this.state.score + 1 });
    }
  };

  render() {
    console.log('this.state.score', this.state.score);
    // console.log('this.state', this.state);
    console.log('monster', this.state.monster);
    return (
      <div >
        <div>
        <Header score={this.state.score} />
        </div>
                
<div className="image-container img-area">
        {' '}
        {this.state.monsters
          .sort(() => 0.5 - Math.random())
          .map(monster => (
            <Card
              pick={this.onHandleClick}
              src={monster.picture}
              key={monster.id}
              name={monster.name}
            />
          ))}
          </div>
      </div>
    );
  }
}

export default CardList;
