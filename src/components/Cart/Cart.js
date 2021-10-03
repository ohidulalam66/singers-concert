import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

// cart component
const Cart = props => {
    const {cart} = props;

    // icon variable 
    const shoppingCartIcon = <FontAwesomeIcon icon={faCartArrowDown} />

    // total singer quantity select & salary select
    let totalQuantity = 0;
    let totalSalary = 0;
    let addName = [];
    for(const singer of cart) {
        if(!singer.quantity) {
            singer.quantity = 1;
        }
        totalQuantity = totalQuantity + singer.quantity;
        totalSalary = totalSalary + singer.quantity * singer.salary;

        // select quantity singer image and name
        addName.push(<div className= "p-2 m-2 rounded-3 text-center selected-bg">
            <img className= "cart-img" src= {singer.image} alt="..."/>
            <br />{singer.name}
        </div>);
    }

    // cart return
    return (
        <div className= "">
            <div className="card cart">
            <h5 className= "cart-header text-danger text-center">{shoppingCartIcon}Concert Presentation</h5>
                <div className="card-body">
                    <h5><b>Selected Musician:</b> {totalQuantity}</h5>
                    <h5><b>Total Salary:</b> ${totalSalary}</h5> 
                    <h5>{addName}</h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;