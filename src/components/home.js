import React from 'react';

const Home = (props) => (
    <div className="main-content">
        <div className="container">
            <h2>{props.title}</h2>
            <div className="background-home-image"></div>
            <div className="home-image-container">
                <div className="home-image-1"></div>
                <div className="home-image-2"></div>
                <div className="home-image-3"></div>
            </div>
        </div>
    </div>
    
);


export default Home;