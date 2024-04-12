import React from 'react';

export const Header = () => {
    return (
        <header>
            <div className="logo">Zepto</div>
            <div className="search-container">
                <input type="text" placeholder="Search for 'kurkure'" />
            </div>
            <div className="user-actions">
                <a href="#">Login</a>
                <a href="#">Cart</a>
            </div>
        </header>
    );
};
