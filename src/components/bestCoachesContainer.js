import React from 'react'
import Coach from './coach'
import {Route} from 'react-router-dom'
import {bestCoachesList} from '../data/bestCoach'
import BestCoaches from './bestCoaches'

const BestCoachesContainer = (props) => {
    let newTeamCoach = bestCoachesList.map((team) => {
         return (
             <Route path={`/bestCoaches/${team.url}`} render={() => <Coach image={team.profile_img} teamName={team.name} teamDescription={team.description} />} />
         ); 
    });
     
    return (
        <React.Fragment>
            <Route exact path="/bestCoaches" component={ BestCoaches } />
            {newTeamCoach}
        </React.Fragment>
               
    )
};

export default BestCoachesContainer;