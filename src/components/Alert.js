import React, { useState, useEffect } from 'react';
import HighTemp from '../Staticfiles/Alert_Icons_Latest/temp_high_alert.png';
// import LowTemp from '../Staticfiles/Alert_Icons_Latest/temp_low_alert.png';
import BatLevel from '../Staticfiles/Alert_Icons_Latest/BatLevel.jpeg';
import High_O2 from '../Staticfiles/Alert_Icons_Latest/High_O2-removebg.png';
import High_HR from '../Staticfiles/Alert_Icons_Latest/High_HR-removebg.png';



const Alert = ({ alert }) => {

    const fetchIcons = Alert_Code => {
        let Icon = '';
        if (Alert_Code === '1') {
            Icon = HighTemp;
        } else if (Alert_Code === '2'){
            Icon = HighTemp;
        } else if (Alert_Code === '3'){
            Icon = High_O2;
        } else if (Alert_Code === '4'){
            Icon = High_O2;
        } else if (Alert_Code === '5'){
            Icon = High_HR;
        } else if (Alert_Code === '6'){
            Icon = High_HR;
        } else if (Alert_Code === '7'){
            Icon = BatLevel;
        }
        return Icon;
    }

    return (
        <div className="alert-detail">
            <div className="icon-div">
                <img className="alert-image" src={fetchIcons(alert.Alert_Code)} alt="Alert" />
                <span>{alert.Device_Temp}</span>
            </div>
            <div className="vitals-div">
                <span className="wearer-nick">{alert.Wearer_Nick}</span>
                <span className="devide-id">{alert.Device_ID}</span>
                <span className="alert-description">{alert.Alert_Description}</span>
                <span className="alert-datetime">{alert.Alert_Datetime}</span>
            </div>
        </div>
    )
}

export default Alert;
