import React from 'react'
import Player from './players'
import {Route} from 'react-router-dom'
import {bestPlayersList} from '../data/bestPlayer'
import BestPlayers from './bestPlayers'

const BestPlayersContainer = () => {
    let newPlayers = bestPlayersList.map((players) => {
        return (
            <Route path={`/bestPlayers/${players.url}`} render={() => <Player playersImage={players.profile_img} playersName={players.name} playersDescription={players.description} />} />
        );
        
    });

    return (
        <React.Fragment>
            <Route exact path="/bestPlayers" render={() => <BestPlayers title="Best Players" />} />
            {newPlayers}
        </React.Fragment>
    )
};

export default BestPlayersContainer;