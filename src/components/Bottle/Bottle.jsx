import React from 'react';
import './Bottle.css'
const Bottle = ({bottle ,handleAddCart ,}) => {
// console.log(bottle);

const {name,img, price}= bottle
    return (
        <div className='bottle-contaner'>
            <h2>Bottle : {name}</h2>
            <img src={img} alt="" />
            <p>Bottle Price : ${price}</p>
            <button onClick={ ()=> handleAddCart(bottle)}> Add Cart</button>
        </div>
    );
};

export default Bottle;