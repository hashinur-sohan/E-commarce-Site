import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            
            <div className='HeaderName'>
                <h1>Al-Haramine</h1>
            </div>
            <div className='header_links'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact</a>
                <a href="/about_us">About Us</a>
            </div>
            
            
        </div>
    );
};

export default Header;