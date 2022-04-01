import React, { Component } from 'react';

function Item(props) {
    const { product, handleAdd } = props
    return (
        <div>
            <h3>Item:  {product.name}</h3>
            <div>Price: ${product.price}</div>
            <div>
                <button onClick={handleAdd}>Add me to cart</button>
            </div>
        </div>
    );
}

export default Item;