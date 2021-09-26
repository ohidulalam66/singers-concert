import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Singers.css';

const Singers = () => {
    
    // Use state is used due to change
    const [singers, setSingers] = useState([])

    // Use state is used due to change cart
    const [cart, setCart] = useState([]);

    // Use effects are used to load data
    const url = './singers.JSON';
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setSingers(data))
    }, [])

    // click cart btn handler
    const handlerCarts = singer => {
        const newAdd = [...cart, singer];
        setCart(newAdd);
    }
    return (
        <div className= "singers-container  pt-3">
            <div className= "singer-container">
                {/* Each singer was mapped to get */}
            <div className= "row p-3">
            {
                singers.map(singer => <Singer
                key= {singer.id}
                singer= {singer}
                handlerCarts= {handlerCarts}
                ></Singer>)
            }
            </div>
            </div>
            <div className= "cart-container">
                <Cart
                cart= {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Singers;