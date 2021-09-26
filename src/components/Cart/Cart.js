import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = props => {
    const {cart} = props;
    console.log(cart)
    const shoppingCartIcon = <FontAwesomeIcon icon={faCartArrowDown} />

    // total singer quantity select & salary select
    let totalQuantity = 0;
    let totalSalary = 0;
    for(const singer of cart) {
        if(!singer.quantity) {
            singer.quantity = 1;
        }
        totalQuantity = totalQuantity + singer.quantity;
        totalSalary = totalSalary + singer.quantity * singer.salary;
    }

    return (
        <div className= "w-50">
            <div className="card position-fixed cart">
            <h5 className= "cart-header">{shoppingCartIcon} Concert Presentation </h5>
                <div className="card-body">
                    <h5><b>Selected Musician:</b> {totalQuantity}</h5>
                    <h5><b>Total Salary:</b> {totalSalary}</h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;