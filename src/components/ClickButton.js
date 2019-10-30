import React, {Component} from "react"
import "./ClickButton.css"

class ClickButton extends Component {


    render() {
        return(
            <div>
                <button className="ClickButton-button">
                    Click! 
                </button>
            </div>
        )
    }
}

export default ClickButton