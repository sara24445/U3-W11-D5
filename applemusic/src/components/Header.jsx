
import React from 'react';
import logo from '../assets/logos'

const Header = () => {
    return (
        <header className="bg-dark text-white text-center py-3">
            <img src={logo} alt="Logo Apple Music" className="mb-2" style={{ maxWidth: '150px' }} />
            <h1>Apple Music Clone</h1>
        </header>
    );
};

export default Header;