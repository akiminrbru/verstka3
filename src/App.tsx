import React from 'react';
import './App.css';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Section4 from "./components/Main/Section4/Section4";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
