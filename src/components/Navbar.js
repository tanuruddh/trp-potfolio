import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import '../style.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            console.log('Scroll');
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar sticky ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid nav">

                <Link className={`navbar-brand top`} to="/" onClick={closeMenu} >
                    <img src={logo} alt="logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>

                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <Link className={`navbar-brand bottom`} to="/" onClick={closeMenu} >
                                <img src={logo} alt="logo" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeMenu}>
                                Contact Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs" onClick={closeMenu}>
                                Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search..."
                                    aria-label="Search"
                                />
                                <i className="ri-search-line"></i>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;