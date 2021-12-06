import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {bestCoachesList} from '../data/bestCoach'

const heading = {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "45px",
}

class BestCoaches extends Component {
    render() {
        let teams = bestCoachesList.map((coaches) => {
            return (
                <div className="team-container">
                <h3>{coaches.name}</h3>
                <Link to={`/bestCoaches/${coaches.url}`}>
                    <div className="team-image" style={{backgroundImage: "url(" + coaches.img_src + ")"}}></div>
                </Link>
            </div>
            );
        });

        return(
            <div className="main-content">
                <div><Link to="/" className="back-link">Back</Link></div>
                <h3 style={heading}>Best Coaches</h3>
                <hr />
                <div className="container">
                    {teams}
                </div>
            </div>    
        );
    }
}


export default BestCoaches;