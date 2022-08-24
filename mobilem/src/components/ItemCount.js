import React, { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    let tope = 10;

    const sumar = () => {
        count < tope && setCount(count + 1);
    };
    const restar = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button className='btn' onClick={sumar}>+</button>
            <button className='btn' onClick={restar}>-</button>
            <p>Count: {count} </p>
            <button className='btn'>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;