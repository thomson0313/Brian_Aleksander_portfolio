import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.header.css';

import Logo from '../../assets/img/logo.png'

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const location = useLocation();
    const currentPath = location.pathname;

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const handleScroll = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 100 && window.scrollY > lastScrollY) {
                setIsHeaderVisible(false); // Scrolling down
            } else {
                setIsHeaderVisible(true); // Scrolling up
            }
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <div className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
                <Link to='/'>
                    <div className='header-logo'>
                        <img src={Logo} alt='logo' />
                        <div className='header-logo-web'>Smallcap AI</div>
                        {/* <div className='header-logo-mobile'>ESC</div> */}
                    </div>
                </Link>
                <div
                    className='burger'
                    onClick={toggleNav}
                    aria-expanded={isNavVisible}
                    aria-label="Toggle navigation"
                >
                    <div className={`line ${isNavVisible ? 'active' : ''}`}></div>
                    <div className={`line ${isNavVisible ? 'active' : ''}`}></div>
                    <div className={`line ${isNavVisible ? 'active' : ''}`}></div>
                </div>
                <div className={`header-nav ${isNavVisible ? 'visible' : ''}`}>
                    <Link to='/' className={`nav ${currentPath === '/' ? 'selected' : ''}`} onClick={toggleNav}>Home</Link>
                    {/* <Link to='/products' className={`nav ${currentPath === '/products' ? 'selected' : ''}`} onClick={toggleNav}>Products</Link> */}
                    <Link to='/services' className={`nav ${currentPath === '/services' ? 'selected' : ''}`} onClick={toggleNav}>Services</Link>
                    <Link to='/about' className={`nav ${currentPath === '/about' ? 'selected' : ''}`} onClick={toggleNav}>About Us</Link>
                    <Link to='/contact' className={`nav ${currentPath === '/contact' ? 'selected' : ''}`} onClick={toggleNav}>Contact Us</Link>
                    <div className='only-mobile burger-logo'>
                        {/* <img src={Logo_mobile} alt='logo' /> */}
                        <div>2025 © Smallcap AI Service Limited liability company</div>
                    </div>
                </div>
            </div>
            <div className='header-space'></div>
        </>
    );
}

export default Header;
