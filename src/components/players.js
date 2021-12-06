import React from 'react'
import {Link} from 'react-router-dom'

const Player = (props) => {
    return (
        <div className="main-content">
            <div><Link to="/bestPlayers" className="back-link">Back</Link></div>
            <h2>{props.playersName}</h2>
            <div className="container">
                <div className="image-profile" style={{backgroundImage: "url(" + props.playersImage + ")" }}></div>
                <p>{props.playersDescription}</p>
            </div>
        </div>
    )
};


export default Player;