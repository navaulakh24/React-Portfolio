import React from 'react';
import About from './about.js';
import Contact from './contact.js';
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