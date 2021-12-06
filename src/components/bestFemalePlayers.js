import React from 'react';
import {Link} from 'react-router-dom'
import {bestFemalePlayersList} from '../data/bestFemalePlayer'

const heading = {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "45px",
}

const BestFemalePlayers = (props) => {
    
    let teams = bestFemalePlayersList.map((femalePlayer) => {
        return(
            <div className="team-container">
                <h3>{femalePlayer.name}</h3>
                <Link to={`/bestFemalePlayers/${femalePlayer.url}`}>
                    <div className="team-image" style={{backgroundImage: "url(" + femalePlayer.img_src + ")"}}></div>
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
    )
    };

export default BestFemalePlayers;