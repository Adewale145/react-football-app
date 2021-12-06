import React from 'react'
import FemalePlayers from './femalePlayers'
import {Route} from 'react-router-dom'
import {bestFemalePlayersList} from '../data/bestFemalePlayer'
import BestFemalePlayers from './bestFemalePlayers'


const BestFemalePlayersList = (props) => {
    let femalePlayer = bestFemalePlayersList.map((female) => {
         return (
             <Route path={`/bestFemalePlayers/${female.url}`} render={() => <FemalePlayers femalePlayerImage={female.profile_img} femalePlayerName={female.name} femalePlayerDescription={female.description} />} />
         ); 
    });
     
    return (
        <React.Fragment>
            <Route exact path="/bestFemalePlayers" render={() =>  <BestFemalePlayers title="Best Female Players" />} />
            {femalePlayer}
        </React.Fragment>
               
    )
};

export default BestFemalePlayersList;