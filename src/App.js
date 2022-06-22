import React, { useState, useEffect } from 'react';
import './App.css';
import './Styles/Admin.css';
import './Styles/Vitals.css';
import './Styles/Alerts.css';
import './Styles/Settings.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { GeneralProvider } from './contexts/GeneralContext';


const App = () => {
    const [showVitalsSection, setShowVitalsSection] = useState(true);
    const [showSurvailSection, setShowSurvailSection] = useState(true);
    const [showSettingsSection, setShowSettingsSection] = useState(true);

    return (
        <GeneralProvider>
            <div className="container">
                <div className="main-body">
                    <Header />
                    <Body />
                </div>
                <Footer />
            </div>
        </GeneralProvider>
    );
}

export default App;
