import React from 'react';
import './i18n/i18n'
import './App.css';
import i18next from "i18next";
import {SchoolArray} from "./components/SchoolArray/SchoolArray";
import {JobArray} from "./components/JobArray/JobArray";

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
                <div className={"jobs-container"}>
                    <h1>Jobs</h1>
                    <JobArray />
                </div>
                <div className={"edu-container"}>
                    <h1>Education</h1>
                    <SchoolArray />
                </div>
                <button onClick={switchLanguage}>SWITCH</button>
            </header>
        </div>
    );
}

export default App;
