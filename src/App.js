import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import Navbar from './components/navbar'
import Home from './components/home'
import BestTeamsContainer from './components/bestTeamsContainer'
import BestCoachesContainer from './components/bestCoachesContainer'
import BestPlayersContainer from './components/bestPlayersContainer'
import BestFemalePlayersContainer from './components/bestFemalePlayersContainer'
import Footer from './components/footer';


class App extends Component {
  render() {     
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="FA Awards 2021" />
          <Route exact path='/' render={() => <Home title="FA Awards 2021" />} />
          <Route path='/bestTeams' render={() => <BestTeamsContainer />} />
            {/* COMPONENT WITHOUT PROPS */}
          <Route path='/bestCoaches' component={BestCoachesContainer} />
            {/* COMPONENT RENDERING WITHOUT PROPS */}
          <Route path='/bestPlayers' render={() => <BestPlayersContainer />} />
          <Route path='/bestFemalePlayers' render={() => <BestFemalePlayersContainer />} />
          <Footer />
        </div> 
      </BrowserRouter>
      
    );    
  }
}

export default App;
