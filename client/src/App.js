import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Page from "./components/Page";
import Header from "./components/Header";
import Resume from "./components/Resume";
import About from "./components/about";
import Contact from "./components/contact";
import Main from "./components/Main";

const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <About />
            <Portfolio /> 
            <Resume />
            <Contact />
            <Footer /> 
        </div>
    );

// function App() {
//     const [pages] = useState([
//         { name: "About Me" },
//         { name: "Portfolio" },
//         { name: "Contact" },

//     ]);
//     const{currentPage, setCurrentPage} = useState(pages[0].name);

//     return (
//         <div>
//             <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
//             <main>
//                 <Page currentPage={currentPage} />
//             </main>
//             <Footer />
//         </div>
//     );
};

export default App;



