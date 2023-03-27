import React from "react";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
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

};

export default App;



