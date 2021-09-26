import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, } from '@fortawesome/free-solid-svg-icons';
import './Singer.css';

const Singer = props => {
    const {image, name, age, occupation, country, salary} = props.singer;
    const shoppingCartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
    return (
        <div className= "col-md-4 g-4">
            <div className="card h-100 p-3">
                <img src={image} className="card-img-top card-img rounded-circle mx-auto" alt="..."/>
                <div className="card-body">
                    <h4><b>Name:</b> {name}</h4>
                    <h6><b>Age:</b> {age}</h6>
                    <h6><b>Occupation:</b> {occupation}</h6>
                    <h6><b>Country:</b> {country}</h6>
                    <h6><b>Salary:</b> ${salary}</h6>
                </div>
                <button 
                className= "btn btn-outline-dark"
                ><h5>{shoppingCartIcon} add to concert</h5></button>
            </div>
        </div>
    );
};

export default Singer;