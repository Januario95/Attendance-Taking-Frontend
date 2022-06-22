import React from 'react';

const VitalTable = ({
    deviceStatus, temp, oxygen, batLevel,
    heartRate, quality, lastReadDate,
    lastReadtime, deviceTag, deviceMac,
    deviceAssign
}) => {
    return (
        <tr>
            <td>{deviceStatus}</td>
            <td>{temp}</td>
            <td>{oxygen}</td>
            <td>{batLevel}</td>
            <td>{heartRate}</td>
            <td>{quality}</td>
            <td>{lastReadDate}</td>
            <td>{lastReadtime}</td>
            <td>{deviceTag}</td>
            <td>{deviceMac}</td>
            <td>{deviceAssign}</td>
        </tr>
    )
}

export default VitalTable;
