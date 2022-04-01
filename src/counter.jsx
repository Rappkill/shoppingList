import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Counter() {
const [count, setCount] = useState(0);


   const handleIncrement = () => {
    setCount(count+1)
    };

    const handleIncrement1 = (count) => {
        setCount(count - 1)
    };

    const formatCount = (count) => {
        return count === 0 ? "Zero" : count;
    };


    
    
    return (
        
        <div>
            <h1>Checkout page</h1>

                <div style={{ width: '35%',border:'solid', margin: 'auto', textAlign: 'center' }}>

                <span className={'btn m-3 btn-warning'} >{formatCount(count) }</span>
                <button className={'btn m-3 btn-success'} onClick= {() =>  handleIncrement(count) }
                // className='btn btn-secondary' 
                >Increment</button> 
                <button onClick={() => handleIncrement1(count) }
                // className='btn btn-secondary m-3'
                >Decrement</button> 
                
                </div>
                <p>There are {count.lenght} items</p>
            </div>    
    );
}

export default Counter;
