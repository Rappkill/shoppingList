import React, { Component, useState } from 'react';
import './index.css'
import items from './items'
import Basket from './Basket';
import Products from './Products';

function Shop() {
const {products} = items;
const [cartItems, setCartItems] = useState([]);

const handleAdd = (product) => {
    const isHere = cartItems.find(x => x.id === product.id);
    if(isHere) {
        setCartItems(cartItems.map(x => x.id === product.id ? {...isHere, qty: isHere.qty +1 } : x ))
    } else {
        setCartItems([...cartItems, {...product, qty: 1}])
    }
};

return (

    <div>
        <h1>Shopping List</h1>

        <div className='row'>
        <Products handleAdd={handleAdd} products={products}></Products>
        <Basket handleAdd={handleAdd} cartItems={cartItems}></Basket>
        </div>
    </div>

    );
}

export default Shop;