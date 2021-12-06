import React from 'react';
import {Link} from 'react-router-dom';
import {bestPlayersList} from '../data/bestPlayer'

const heading = {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "45px",
}

const BestPlayers = (props) => {

    let teams = bestPlayersList.map((player) => {
        return (
            <div className="team-container">
                <h3>{player.name}</h3>
                <Link to={`/bestPlayers/${player.url}`}>
                    <div className="team-image" style={{backgroundImage: "url(" + player.img_src + ")"}}></div>
                </Link>
            </div>
        );  
    });


    return (
        <div className="main-content">
            <div><Link to="/" className="back-link">Back</Link></div>
            <h3 style={heading}>{props.title}</h3>
            <hr />
            <div className="container">
                {teams}
            </div> 
        </div>
    );
    
};



export default BestPlayers;