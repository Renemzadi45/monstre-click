import React, {Component} from 'react'

const Score = (props) => {
    return(
        <div className='Score'>
            <h1>Score : {props.score}</h1>               
        </div>
    )
}


export default Score