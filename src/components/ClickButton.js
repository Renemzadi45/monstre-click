import React, {Component} from "react"
import "./ClickButton.css"
import {Link} from "react-router-dom"

class ClickButton extends Component {


    render() {
        return(
            <div>
                <Link to="/startgame">
                <button className="ClickButton-button">
                    Click! 
                    
                </button>
                </Link>
            </div>
        )
    }
}

export default ClickButton