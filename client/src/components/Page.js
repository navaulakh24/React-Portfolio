import React from 'react';
import About from '../pages/About/about.js';
import Contact from '../pages/Contact/contact.js';
import Projects from './projects.js';

const Page = ({currentPage}) => {
    

    const renderPage = (currentPage) => {
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

    return (
        <div>
            <h2>{currentPage}</h2>
            {renderPage(currentPage)}
        </div>
    );
};

export default Page;