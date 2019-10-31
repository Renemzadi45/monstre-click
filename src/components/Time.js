import React, { Component } from 'react';

class Time extends Component {
  state = {
    timer2: 100,
    timerUpdated: false
  };

  componentDidUpdate() {
    if (!this.state.timerUpdated) {
      if (this.props.timer === true) {
        this.setState({ timerUpdated: true });
        setInterval(() => this.timeDecreases(), 1000);
      }
    }
  }

  timeDecreases() {
    if (this.state.timer2 > 0) {
      const newTime = this.state.timer2 - 1;
      this.setState({ timer2: newTime });
    } else {
      this.props.finishedGame();
    }
  }

  render() {
    console.log(this.state.timer2);
    return (
      <div>
        <h1>Time : 00 {this.state.timer2}</h1>
      </div>
    );
  }
}

export default Time;
