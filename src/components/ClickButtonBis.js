import React, {Component} from "react"
import "./ClickButton.css"
import {Link} from "react-router-dom"

class ClickButtonBis extends Component {

    render() {
        return(
            <div>
                <Link to="/startgame">
                <button className="ClickButton-button">
                    blabla! 
                    
                </button> 
                </Link>
                
            </div>
        )
    }
}

export default ClickButtonBis