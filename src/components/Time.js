import React, { Component } from 'react'

class Time extends Component {

    // componentDidMount() {
    //     setInterval(() => this.timeDecreases(), 1000);
    // }

    // timeDecreases() {
    //      if (monstertoclick timer = 0) {
    //         if (this.state.timer1 > 0) {
    //             const newTime = this.state.timer1 - 1;
    //             this.setState({ timer1: newTime });
    //         }
    //     }
    // }

    render() {
        return (
            <div>
                <h1>Time : 00 {this.props.timer}</h1>
            </div>
        )
    }
}


export default Time