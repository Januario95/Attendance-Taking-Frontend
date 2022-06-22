import React, { useState, useEffect } from 'react';
import VitalTable from './VitalTable';
import {Token} from './Token';

const VitalPage = () => {
    const [deviceData, setDeviceData] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


    const fetchDeviceDate = () => {
        fetch(`${Token.prod.URL}/tabledevice/`, {
            headers: {
                'Authorization': `Token ${Token.prod.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.length);
                setDeviceData(data);
                if (data.length > 0) {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                }
            })
            .catch(err => console.log(err));
    }

    const TimeFormating = time => {
        if (time === null || time === undefined) {
            return '';
        } else {
            let t = time.replace("P0DT", "");
            t = t.replace("H", ":");
            t = t.replace("M", ":");
            t = t.replace("S", "");
            return t;
        }
    }

    const deviceStatusFunc = (deviceStatus, incorrectDataFlag) => {
        if (deviceStatus === 'OFFLINE') {
            return 'NA';
        }
        if (incorrectDataFlag === 1) {
            return "Bad";
        } else if (incorrectDataFlag === 0) {
            return "Good";
        }
    }

    useEffect(() => {
        fetchDeviceDate();
        // let setInterval1 = setInterval(fetchDeviceDate, 1000);
    }, []);

    return (
        <div className="vital-page">
            <h3>Vital Surveillance</h3>
            <div className="table-div">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Device_Status</th>
                            <th>Temp</th>
                            <th>O2</th>
                            <th>Bat</th>
                            <th>HR</th>
                            <th>Quality</th>
                            <th>Last Read Date</th>
                            <th>Last Read Time</th>
                            <th>Device_Tag</th>
                            <th>Device_Mac</th>
                            <th>Device Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isEmpty ?
                            deviceData.map((device, index) => (
                                <VitalTable
                                    key={index}
                                    deviceStatus={device.device_status}
                                    temp={device.device_temp}
                                    oxygen={device.device_O2}
                                    batLevel={device.device_bat}
                                    heartRate={device.device_hr}
                                    quality={deviceStatusFunc(device.device_status, 1)}
                                    lastReadDate={device.last_read_date}
                                    lastReadtime={device.last_read_time}
                                    deviceTag={device.device_tag}
                                    deviceMac={device.device_mac}
                                    deviceAssign={device.device_assignment}
                                />
                            )) : <tr className="no-data">
                                    <td colSpan="11">No data available</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VitalPage;
