import React, { useState, createContext } from 'react';


export const GeneralContext = createContext();


export const GeneralProvider = (props) => {
    const [showVitals, setShowVitals] = useState([
        {
            name: 'admin',
            value: false
        },
        {
            name: 'vital',
            value: false
        },
        {
            name: 'quarantine',
            value: true,
        },
        {
            name: 'settings',
            value: false
        },
        {
            name: 'gateway',
            value: false
        }
    ]);

    return (
        <GeneralContext.Provider value={[showVitals, setShowVitals]}>
            {props.children}
        </GeneralContext.Provider>
    )
}
