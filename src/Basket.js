import React, { Component } from 'react';

function Basket(props) {
    const { cartItems, products } = props;
    return (
        <aside className='block col-1'>
            <h1>Cart Items</h1>
            <div>
                {cartItems.length === 0 && <div>No products in your shopping cart</div>}
            </div>
            {console.log(cartItems)}
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div>{item.name}</div>
                    <div>{item.qty} x ${item.price}</div>

                </div>
            ))}
        </aside>
    );
}


export default Basket; 