import React from 'react';
import './EmptyCart.scss'
import { useNavigate } from 'react-router';
import empty from './cart.png'

const EmptyCart = () => {
    const navigate = useNavigate()
    return (
        <div className='emptyCart'>
            <img src={empty} alt='empty' />
            <button onClick={() => navigate('/')}>
                <i className='fas fa-long-arrow-alt-left'></i> Shop Now
            </button>
        </div>
    );
};

export default EmptyCart;