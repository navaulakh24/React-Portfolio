import React, { useState } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import About from '../pages/About/about.js';
import Contact from '../pages/Contact/contact.js';
import Projects from '../pages/Projects/projects.js';

function ProjectContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            default:
                return null;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};

export default ProjectContainer;