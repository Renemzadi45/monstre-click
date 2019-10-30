import React, {Component} from 'react'
import Score from './Score'
import Time from './Time'
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className='Header'>
                <Score/>
                <h1>Monsters & Click</h1>
                <Time/>
                
            </div>
        )
    }
}


export default Header