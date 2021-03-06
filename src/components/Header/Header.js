import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className= "container header text-center pb-3 rounded-bottom">
            <div className= "d-flex justify-content-center align-items-center">
            <img src="./logo.png" alt="" />
            <h1 className= "fw-bold">International singers concert-2021</h1>
            </div>
            <h5>'I don't make music for eyes I make music for ears.'</h5>
            <h1 className= "text-danger">Total Budget: $1203710</h1>
        </div>
    );
};

export default Header;