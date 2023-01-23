import React from 'react';
import logo from '../../img/Logo (1).svg';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            
            <nav className='logo'>
               
            <img src={logo} alt=""/>
            </nav>
            <div className='Name'>
                <h1>Perfume BD</h1>
            </div>
            <div className='header_links'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
            
            
        </div>
    );
};

export default Header;