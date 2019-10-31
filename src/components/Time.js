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

    render() {
        console.log(this.state.timer2)
        return (
            <div>
                <h1>Time : {this.state.timer2}</h1>
            </div>
        )
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
