import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => (
    <React.Fragment>
        <nav>
            <h2 className="logo-head"><a className="logo-link" href="#">{props.title}</a></h2>
            <ul className="nav-menu">
                <li><NavLink className="nav-menu-link"exact to='/'>Home</NavLink></li>
                <li><NavLink className="nav-menu-link" to='/bestTeams'>Best Teams</NavLink></li>
                <li><NavLink className="nav-menu-link"  to='/bestCoaches'>Best Coaches</NavLink></li>
                <li><NavLink className="nav-menu-link"  to='/bestPlayers'>Best Players</NavLink></li>
                <li><NavLink className="nav-menu-link"  to='/bestFemalePlayers'>Best Female Players</NavLink></li>
            </ul>
    </nav>
  </React.Fragment>
);

export default Navbar;