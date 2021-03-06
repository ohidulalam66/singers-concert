import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, } from '@fortawesome/free-solid-svg-icons';
import './Singer.css';

// singer component
const Singer = props => {

    // singer data detructuring
    const {image, name, age, occupation, country, salary} = props.singer;
    const shoppingCartIcon = <FontAwesomeIcon icon={faCartArrowDown} />

    // card data showing
    return (
        <div className= "col-md-4 g-4">
            <div className="card card-bg h-100 p-3 card-hover">
                <img src={image} className="card-img-top card-img rounded-circle mx-auto" alt="..."/>
                <div className="card-body">
                    <h4><b>Name:</b> {name}</h4>
                    <h6><b>Age:</b> {age}</h6>
                    <h6><b>Occupation:</b> {occupation}</h6>
                    <h6><b>Country:</b> {country}</h6>
                    <h6><b>Salary:</b> ${salary}</h6>
                </div>

                {/* click event handler data load */}
                <button 
                onClick= {() => props.handlerCarts(props.singer)}
                className= "btn btn-outline-warning"
                ><h5>{shoppingCartIcon} add to concert</h5></button>
            </div>
        </div>
    );
};

export default Singer;