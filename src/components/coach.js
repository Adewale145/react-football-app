import React from 'react';
import {Link} from 'react-router-dom'

const Coach = (props) => {
    return (
        <div className="main-content">
           <div><Link to="/bestCoaches" className="back-link">Back</Link></div>
           <h2>{props.teamName}</h2>
           <div className="container">   
               <div className="image-profile" style={{backgroundImage: "url(" + props.image + ")" }}></div>
               <p>{props.teamDescription}</p>   
           </div>
        </div>
    );
};

export default Coach;