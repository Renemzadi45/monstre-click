import React, { Component } from 'react';
import Card from './Card';
import Header from './Header';
import MonsterToClick from './MonsterToClick';
import DisplayFinalScoreBis from './DisplayFinalScore';
import './Card.css';

export class CardListBis extends Component {
  state = {
    monsters: [],
    monster: {},
    score: 0,
    startTimer: false,
    isEnd: false
  };

  handleChange = () => {
    if (this.state.startTimer === false) this.setState({ startTimer: true });
  };

  finishedGame = () => {
    if (this.state.isEnd === false) {
      this.setState({ isEnd: true });
    }
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
    if (
      e.target.src === this.state.monster.picture &&
      this.state.isEnd === false
    ) {
      console.log('youpi');
      this.setState({ score: this.state.score + 1 });
    }
  };

  render() {
    console.log('this.state.isEnd', this.state.isEnd);
    if (this.state.isEnd === false) {
      return (
        <div>
          <div>
            <Header
              score={this.state.score}
              timer={this.state.startTimer}
              finishedGame={this.finishedGame}
            />
          </div>
          {this.state.startTimer ? (
            ''
          ) : (
            <div>
              <MonsterToClick
                timer={this.handleChange}
                src={this.state.monster.picture}
              />
            </div>
          )}
          {this.state.startTimer ? (
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
          ) : (
            ''
          )}
        </div>
      );
    } else {
      return <DisplayFinalScoreBis score={this.state.score} />;
    }
  }
}

export default CardListBis;
