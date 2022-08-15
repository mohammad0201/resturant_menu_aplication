import React from 'react';
import './ButtonCartCount.scss'
import { useNavigate } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItemsCount } from 'redux/cart/cart.selector';




const ButtonCartCount = ({ cartCount }) => {
    const navigate = useNavigate()
    return (
        <div className='btnCartCount' onClick={() => navigate('/cart')}>
            <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
            <i className='fas fa-shopping-cart'></i>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
