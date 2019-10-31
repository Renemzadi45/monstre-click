import React, {Component} from 'react'
import Score from './Score'
import Time from './Time'
import './Header.css'

const Header = (props) => {
    return(
        <div className='Header'>
            <Score score={props.score} />
            <h1>Monsters & Click</h1>
            <Time timerEnd={props.timerEnd} start= {props.timer2} timer={props.timer} />
            
        </div>
    )
}

export default Header