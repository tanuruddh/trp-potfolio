import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Blog from './Blog.js';

const RouteNav = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="*" element={<Home />} />

            {/* <DefaultRoute handler={<Home />} /> */}
        </Routes>

    )
}

export default RouteNav
