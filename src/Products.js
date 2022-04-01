import React, { Component } from 'react';
import Item from './Item';

function Products(props) {
    const { products, handleAdd } = props;
    return (
        <main className='block col-2'>
            <div >
                <h1>Products</h1>
                <div>
                    {products.map((product) => (
                        <Item key={product.id} product={product} handleAdd={handleAdd}></Item>
                    ))}
                </div>
            </div>

        </main >
    );
}


export default Products; 