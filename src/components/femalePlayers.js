import React from 'react';
import {Link} from 'react-router-dom'

const FemalePlayers = (props) => {
    return (
        <div className="main-content">
           <div><Link to="/BestFemalePlayers" className="back-link">Back</Link></div>
           <h2>{props.femalePlayerName}</h2>
           <div className="container">   
               <div className="image-profile" style={{backgroundImage: "url(" + props.femalePlayerImage + ")" }}></div>
               <p>{props.femalePlayerDescription}</p>   
           </div>
        </div>
    );
};

export default FemalePlayers;