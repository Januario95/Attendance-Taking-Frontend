import React, {
    useState,
    useContext
} from 'react';
import './App.css';
import './Styles/Admin.css';
import './Styles/Vitals.css';
import './Styles/Alerts.css';
import './Styles/Events.css';
import './Styles/Settings.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import logo from './Staticfiles/BG37-Logo.png';
import GoogleMap from './components/GoogleMap';
import UserHeader from './components/UserHeader';
import VitalPage from './components/VitalPage';
import Alerts from './components/Alerts';
import EventPage from './components/Events';
import SurvaillancePage from './components/SurvaillancePage';
import Settings from './components/Settings';
import CreateDevice from './components/CreateDevice';
import Gateways from './components/Gateways';
import { GeneralProvider } from './contexts/GeneralContext';
import { GeneralContext } from './contexts/GeneralContext';


const App2 = () => {
    // const [showVitals, setShowVitals] = useContext(GeneralContext);
    const [showAdminSection, setShowAdminSection] = useState(false);
    const [showVitalsSection, setShowVitalsSection] = useState(false);
    const [showSurvailSection, setShowSurvailSection] = useState(false);
    const [showSettingsSection, setShowSettingsSection] = useState(false);
    const [showGatewaySection, setShowGatewaySection] = useState(false);
    const [showEventsSection, setShowEventsSection] = useState(true);

    const [date, setDate] =  useState(new Date());
    const [showGatewayTable, setShowGatewayTable] = useState(false);

    const showTable = () => {
        if (showGatewayTable) {
            setShowGatewayTable(false);
        } else {
            setShowGatewayTable(true);
        }
    }


    function runSetBackgroundColor(target, first, second, third, fourth, fifth) {
        target.addEventListener('click', e => {
            target.classList.add('link-background');
            first.classList.remove('link-background');
            second.classList.remove('link-background');
            third.classList.remove('link-background');
            fourth.classList.remove('link-background');
            fifth.classList.remove('link-background');
        });
    }

    const handleLinkClick = (target) => {
        let admin = document.querySelector('.admin');
        let vital = document.querySelector('.vital');
        let quarantine = document.querySelector('.quarantine');
        let settings = document.querySelector('.settings');
        let gateway = document.querySelector('.gateway');
        let events = document.querySelector('.events');

        runSetBackgroundColor(admin, vital, quarantine, settings, gateway, events);
        runSetBackgroundColor(vital, quarantine, settings, gateway, events, admin);
        runSetBackgroundColor(quarantine, settings, gateway, events, admin, vital);
        runSetBackgroundColor(settings, gateway, events, admin, vital, quarantine);
        runSetBackgroundColor(gateway, events, admin, vital, quarantine, settings);
        runSetBackgroundColor(events, admin, vital, quarantine, settings, gateway);
        

        showPage(target);
    }

    const showPage = (target) => {
        if (target === 'admin') {
            setShowAdminSection(true);
            setShowVitalsSection(false);
            setShowSurvailSection(false);
            setShowSettingsSection(false);
            setShowGatewaySection(false);
            setShowEventsSection(false);
        }

        if (target === 'vital') {
            setShowAdminSection(false);
            setShowVitalsSection(true);
            setShowSurvailSection(false);
            setShowSettingsSection(false);
            setShowGatewaySection(false);
            setShowEventsSection(false);
        }

        if (target === 'quarantine') {
            setShowAdminSection(false);
            setShowVitalsSection(false);
            setShowSurvailSection(true);
            setShowSettingsSection(false);
            setShowGatewaySection(false);
            setShowEventsSection(false);
        }

        if (target === 'settings') {
            setShowAdminSection(false);
            setShowVitalsSection(false);
            setShowSurvailSection(false);
            setShowSettingsSection(true);
            setShowGatewaySection(false);
            setShowEventsSection(false);
        }

        if (target === 'gateway') {
            setShowAdminSection(false);
            setShowVitalsSection(false);
            setShowSurvailSection(false);
            setShowSettingsSection(false);
            setShowGatewaySection(true);
            setShowEventsSection(false);
        }

        if (target === 'events') {
            setShowAdminSection(false);
            setShowVitalsSection(false);
            setShowSurvailSection(false);
            setShowSettingsSection(false);
            setShowGatewaySection(false);
            setShowEventsSection(true);
        }
    }

    return (
        <GeneralProvider>
            <div className="container">
                <div className="main-body">
                    <div className="left-section">
                        <div className="logo-div">
                            <img
                                className="logo-bg"
                                src={logo}
                                alt=""
                            />
                        </div>
                        <div
                            className="header-link events"
                            onClick={(e) => handleLinkClick('events')}
                        >EVENTS</div>
                        <div
                            className="header-link admin"
                            onClick={(e) => handleLinkClick('admin')}
                        >ADMIN</div>
                        <div
                            className="header-link vital"
                            onClick={(e) => handleLinkClick('vital')}
                        >VITAL SURVEILLANCE</div>
                        <div
                            className="header-link quarantine"
                            onClick={(e) => handleLinkClick('quarantine')}
                        >QUARANTINE SURVEILLANCE</div>
                        <div
                            className="header-link settings"
                            onClick={(e) => handleLinkClick('settings')}
                        >
                            SETTINGS
                        </div>
                    </div>

                    <div className="right-section">
                        <div className="right-section-top">

                            <div>
                                <div className="user-section">
                                    <div className="username-section">
                                        Welcome, hayysoft
                                    </div>
                                    <div
                                        className="online-gateways gateway"
                                        onClick={(e) => handleLinkClick('gateway')}
                                    >GATEWAYS</div>
                                    <div
                                        className="date-section"
                                    >Date:
                                        {date.getDate()}-
                                        {date.getMonth()+1}-
                                        {date.getFullYear()}
                                    </div>
                                </div>
                            </div>

                            {/*
                            <Alerts />
                        */}
                        </div>

                        <div className="right-section-bottom">
                            {showGatewaySection ? (
                                <Gateways />
                                ) : ''
                            }
                            {showAdminSection ? (
                                <CreateDevice />
                                ) : ''
                            }
                            {showVitalsSection ? (
                                <VitalPage />
                                ) : ''
                            }
                            {showSurvailSection ? (
                                <SurvaillancePage />
                                ) : ''
                            }
                            {showSettingsSection ? (
                                <Settings />
                                ) : ''
                            }
                            {showEventsSection ? (
                                <EventPage />
                                ) : ''
                            }
                            {/*
                            <GoogleMap />
                        */}
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </GeneralProvider>
    );
}

export default App2;

