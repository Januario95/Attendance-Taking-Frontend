import React, { useState } from 'react';
import $ from 'jquery';


const SurvaillanceTable = ({
    index, deviceStatus, deviceTag,
    lastUpdateDate, lastUpdatedTime,
    patientTag, breachStatus, startStop
}) => {
    const [startStopText, setStartStopText] = useState('Start');

    const startStopBtn = () => {
        $('.start-stop-btn').toggleClass('start-stop-btn-red');
    }

    return (
        <tr>
            <td>{deviceStatus}</td>
            <td>{deviceTag}</td>
            <td>{lastUpdateDate}</td>
            <td>{patientTag}</td>
            <td>
                <a href="#">Details</a>
            </td>
            <td>
                <button
                    className="start-stop-btn"
                    onClick={startStopBtn}
                >{startStopText}</button>
            </td>
        </tr>
    )
}

export default SurvaillanceTable;

