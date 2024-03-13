import React from 'react'
import logo from '../images/logo.svg';
import '../style.css';
import { Link } from 'react-router-dom';
function Navbar() {
    const handleScroll = () => {
        if (window.scrollY) { }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <>

            <nav className="navbar navbar-expand  navbar-tag sticky" >
                <div className="container-fluid nav">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link  text-white" to='/contact'>Contact Me</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-white" to='/blogs'>Blogs</Link>

                            </li>
                            <li>

                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                                    <i className="ri-search-line"></i>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
