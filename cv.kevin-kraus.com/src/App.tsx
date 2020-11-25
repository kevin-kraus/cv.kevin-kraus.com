import React from 'react';
import './i18n/i18n'
import './App.css';
import {JobComponent} from "./components/Job/Job";
import i18next from "i18next";

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
                <JobComponent/>
                <button onClick={switchLanguage}>SWITCH</button>
            </header>
        </div>
    );
}

export default App;
