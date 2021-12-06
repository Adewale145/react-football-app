import React from 'react'
import Team from './team';
import {Route} from 'react-router-dom'
import {bestTeamsList} from '../data/bestTeam'
import BestTeams from './bestTeams'

const BestTeamsContainer = (props) => {
    let teamUrl = bestTeamsList.map((team) => {
         return (
             <Route path={`/bestTeams/${team.url}`} render={() => <Team image={team.profile_img} teamName={team.name} teamDescription={team.description} />} />
         ); 
    });
     
    return (
        <React.Fragment>
            <Route exact path="/bestTeams" render={() => <BestTeams title="Best Teams" />} />
            {teamUrl}
        </React.Fragment>
               
    )
};

export default BestTeamsContainer;