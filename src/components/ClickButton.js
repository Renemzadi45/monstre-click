import React, {Component} from "react"
import "./ClickButton.css"
import {Link} from "react-router-dom"

class ClickButton extends Component {


    render() {
        return(
            <div>
         
                <Link to="/newgame">
                <button className="ClickButton-button">
                    goestonewgame! 
                    
                </button> 
                </Link>
               

            </div>
        )
    }
}

export default ClickButton