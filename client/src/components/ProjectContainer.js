import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

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