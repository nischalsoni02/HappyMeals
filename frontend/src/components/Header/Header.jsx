import React from 'react'
import './Header.css'

const Header = () => {
    const handleViewMenuClick = () => {
        const menuSection = document.getElementById('explore-menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Craving something special?</h2>
                <h3>This is where Hunger meets happiness! Dive into dishes made to delight and satisfy.</h3>
                <button onClick={handleViewMenuClick}>View Menu</button>
            </div>
        </div>
    );
}

export default Header;
