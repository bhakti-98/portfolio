import HomePage from "./HomePage";

import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ResearchPage from "./ResearchPage";

function Navbar() {
    return (
        <BrowserRouter>
            <div>
                <div id="top-bar">
                    <a href="#home"><Link to="/">Home</Link></a>
                    <a href="#research"> <Link to="/research">Research</Link></a>
                    <a href="#cv">CV</a>

                    <div id="social-icons">
                        <a href="https://github.com/your-username" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="mailto:your-email@example.com"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>

                <Routes>
                    <Route path="/research" element={<ResearchPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Navbar;