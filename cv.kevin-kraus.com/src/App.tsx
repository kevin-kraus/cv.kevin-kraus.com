import React from 'react';
import './i18n/i18n'
import './App.css';
import i18next from "i18next";
import {SchoolArray} from "./components/SchoolArray/SchoolArray";

function App() {
    const switchLanguage = () => {
        if (i18next.language === 'de') {
            i18next.changeLanguage('en')
        } else {
            i18next.changeLanguage('de')
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                <SchoolArray />
                <button onClick={switchLanguage}>SWITCH</button>
            </header>
        </div>
    );
}

export default App;
