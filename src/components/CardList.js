import React, { Component } from 'react'
import Card from './Card'

export class CardList extends Component {
  state = {
    monsters: []
  }

  getMovies =() => {
    fetch('https://hackathon-wild-hackoween.herokuapp.com/monsters')
      .then(res => res.json())
      .then(data => this.setState({monsters: data.monsters}))
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div>
        { this.state.monsters.map(monster => <Card src={monster.picture} key={monster.id} name={monster.name} /> ) }
        
      </div>
    )
  }
}

export default CardList
