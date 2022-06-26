// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2>Call a Friend</h2>
            <h5>Your friendly contact app</h5>
            <div className='dot'>
                <span>------------------------------</span>
            </div>
        </div>
    )
}

export default Header;