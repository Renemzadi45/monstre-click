import React, {Component} from "react"

class MonsterToClick extends Component {

state = {
    timer1 : 3,
}

componentDidMount() {
    setInterval(() => this.timeDecreases(), 1000);
  }

  timeDecreases() {
    if (this.state.timer1 > 0) {
      const newTime = this.state.timer1 - 1;
      this.setState({ timer1: newTime });
    } else {
        this.props.timer()
    }
  }

    render() {
        return(
            <div>
                <div>
                    <p>Remember this face...</p>
                </div>
                <div>
                <img src={this.props.src} />
                </div>
                <div>
                    <p>{this.state.timer1}</p>
                </div>

            </div>
        )
    }
}


export default MonsterToClick