import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import '../Staticfiles/Map.jpeg';
// import '../Staticfiles/BG37-Logo.png';
import LocationPin from './LocationPin';
import GoogleMap from './GoogleMap';
import UserHeader from './UserHeader';
import VitalPage from './VitalPage';
import Alerts from './Alerts';
import SurvaillancePage from './SurvaillancePage';
import Settings from './Settings';
import { GeneralContext } from '../contexts/GeneralContext';


const Body = () => {
    const [showVitals, setShowVitals] = useContext(GeneralContext);
    const [switchPage, setWitchPage] = useState(true);
    const [showVitalsSection, setShowVitalsSection] = useState(false);
    const [showSurvailSection, setShowSurvailSection] = useState(true);
    const [showSettingsSection, setShowSettingsSection] = useState(false);

    const showPage = () => {
        // showVitals.map(val => {
        //     if (showSurvailSection) {
        //         setShowSurvailSection(false);
        //     } else {
        //         setShowSurvailSection(true);
        //     }
        // });
    }

    useEffect(() => {
        console.log(showVitals[1]);
    }, []);

    return (
        <div className="right-section">
            <div className="right-section-top">
                <UserHeader />
                <Alerts />
            </div>

            <div className="right-section-bottom">
                {showVitals[1].value ? (
                    <VitalPage />
                    ) : ''
                }
                {showVitals[2].value ? (
                    <SurvaillancePage />
                    ) : ''
                }
                {showVitals[3].value ? (
                    <Settings />
                    ) : ''
                }
                {/*
                <GoogleMap />
                */}
            </div>
        </div>
    );
}

export default Body;
