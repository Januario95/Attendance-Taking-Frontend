import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import {Token} from './Token';


const Alerts = () => {
    const [allAlerts, setAllAlerts] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


    const fetchAlerts = () => {
        fetch(`${Token.dev.URL}/top_five_alerts_api/`, {
            headers: {
                'Authorization': `Token ${Token.dev.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.alerts.length > 0) {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                }
                setAllAlerts(data.alerts);
                // console.log(data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        // fetchAlerts();
        // let setInterval1 = setInterval(fetchAlerts, 1000);
    }, []);



    return (
        <div className="alerts-section">
            <h3>Alerts</h3>
            <div className="alerts-div">
                {isEmpty ? (
                    allAlerts.map((alert, index) => (
                        <Alert
                            key={index}
                            alert={alert}
                        />
                    ))
                    ) : (
                        <p className="no-alert">
                            No data available
                        </p>
                    )
                }
            </div>
        </div>
    );
}


export default Alerts;

