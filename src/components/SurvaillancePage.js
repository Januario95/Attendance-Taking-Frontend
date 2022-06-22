import React, { useState, useEffect } from 'react';
import {Token} from './Token';
import SurvaillanceTable from './SurvaillanceTable';



const SurvaillancePage = () => {
    const [survailData, setSurvailData] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    const fetchSurvaillance = () => {
        fetch(`${Token.dev.URL}/Quanrantine_Surveillance_Data/`, {
            headers: {
                'Authorization': `Token ${Token.dev.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setSurvailData(data.surveillance);
                if (data.surveillance.length > 0) {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                }
                // console.log(data.surveillance);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        // fetchSurvaillance();
        // let setInterval1 = setInterval(fetchSurvaillance, 1000);
    }, []);

    return (
        <div className="survaillance-page">
            <h3>Quarantine Survaillance</h3>
            <div className="table-div surveillance-table">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Device Tag</th>
                            <th>Last Updated</th>
                            <th>Patient Tag</th>
                            <th>Breach Records</th>
                            <th>Start/Stop</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty ? (
                            survailData.map((device, index) => (
                                <SurvaillanceTable
                                    key={index}
                                    index={index}
                                    deviceStatus={device.Device_Status}
                                    deviceTag={device.Device_Tag}
                                    lastUpdateDate={device.Device_Last_Updated_Date}
                                    patientTag={device.Patient_Tag[0].Patient_Discharged}
                                    breachStatus={device.breachStatus}
                                    startStop={device.startStop}
                                />
                            ))
                            ) : (
                                <tr className="no-data">
                                    <td colSpan="6">No data available</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SurvaillancePage;
