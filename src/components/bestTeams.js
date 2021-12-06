import React from 'react';
import {Link} from 'react-router-dom';
import {bestTeamsList} from '../data/bestTeam';

const heading = {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "45px",
}

const BestTeams = (props) => {

    let teams = bestTeamsList.map((person) => {
        return(
            <div className="team-container">
                <h3>{person.name}</h3>
                <Link to={`/bestTeams/${person.url}`}>
                    <div className="team-image" style={{backgroundImage: "url(" + person.img_src + ")"}}></div>
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


export default BestTeams; 
