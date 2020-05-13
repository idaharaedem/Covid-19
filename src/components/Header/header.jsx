import React from 'react';
import covidImage from '../../assets/covid19_transparent.png';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <h1> COVID-19 TRACKER </h1>
        <div className="header-image">
         <img src={covidImage}/>
        </div>
    </div>

   
);

export default Header;