import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Page from "./components/Page";

const App = () => {
    return (
        <div>
        <Navigation />
        <Portfolio />
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
