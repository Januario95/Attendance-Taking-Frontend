    import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import logo from '../Staticfiles/BG37-Logo.png';
import { GeneralContext } from '../contexts/GeneralContext';


const Header = () => {
    const [showVitals, setShowVitals] = useContext(GeneralContext);
    const [switchPage, setWitchPage] = useState(true);
    const [showVitalsSection, setShowVitalsSection] = useState(false);
    const [showSurvailSection, setShowSurvailSection] = useState(false);
    const [showSettingsSection, setShowSettingsSection] = useState(false);

    const showPage = (target) => {
        console.log(target);
        showVitals.map(val => {
            if (val.name == target) {
                if (val.value) {
                    val.value = false;
                } else {
                    val.value = true;
                }
            }
        });
        console.log(showVitals);
    }

    function runSetBackgroundColor(target, first, second, third) {
        target.addEventListener('click', e => {
            target.classList.add('link-background');
            first.classList.remove('link-background');
            second.classList.remove('link-background');
            third.classList.remove('link-background');
        });
    }

    const handleLinkClick = (e) => {
        let admin = document.querySelector('.admin');
        let vital = document.querySelector('.vital');
        let quarantine = document.querySelector('.quarantine');
        let settings = document.querySelector('.settings');

        runSetBackgroundColor(admin, vital, quarantine, settings);
        runSetBackgroundColor(vital, quarantine, settings, admin);
        runSetBackgroundColor(quarantine, settings, admin, vital);
        runSetBackgroundColor(settings, admin, vital, quarantine);
    }

    useEffect(() => {
        // console.log(showVitals);
        // document.querySelector('.vital').classList.add('link-background');
    }, []);

    return (
        <div className="left-section">
            <div className="logo-div">
                <img
                    className="logo-bg"
                    src={logo}
                    alt=""
                />
            </div>
            <div
                className="header-link admin"
                onClick={(e) => showPage('admin')}
            >ADMIN</div>
            <div
                className="header-link vital"
                onClick={(e) => showPage('vital')}
            >VITAL SURVEILLANCE</div>
            <div
                className="header-link quarantine"
                onClick={(e) => showPage('quarantine')}
            >QUARANTINE SURVEILLANCE</div>
            <div
                className="header-link settings"
                onClick={(e) => showPage('settings')}
            >
                SETTING
            </div>
            <div
                className="header-link events"
                onClick={(e) => showPage('events')}
            >EVENTS</div>
        </div>
    );
}

export default Header;
