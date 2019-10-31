import React, {Component} from "react"
import "./ClickButton.css"
import {Link} from "react-router-dom"

function RefreshPageButton() {
  
    function refreshPage() {
      window.location.reload(false);
    }
    
    return (
      <div>
        <button className="ClickButton-button" onClick={refreshPage}>Try Again!</button>
      </div>
    );
  }
  

export default RefreshPageButton