import React, { useState, useEffect } from 'react';
import {Token} from './Token';

const CreateDevice = () => {
    const [deviceType, setdeviceType] = useState('');
    const [deviceSerialNo, setdeviceSerialNo] = useState('');
    const [wearerId, setwearerId] = useState('');
    const [deviceMac, setdeviceMac] = useState('');

    const changedeviceType = e => {
        setdeviceType(e.target.value);
    }

    const changedeviceSerialNo = e => {
        setdeviceSerialNo(e.target.value);
    }

    const changewearerId = e => {
        setwearerId(e.target.value);
    }

    const changedeviceMac = e => {
        setdeviceMac(e.target.value);
    }

    const updateInfo = e => {
        let data = {
            deviceType,
            deviceSerialNo,
            deviceMac,
            wearerId
        }
        console.log(data);
        // fetch(`https://bluguard37.herokuapp.com/Create_Device_API/${deviceType}/${deviceSerialNo}/${deviceMac}/${wearerId}/`, {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Token ${Token.token}`,
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(err => console.log(err));


        // let wrong_email = document.querySelector('.wrong-email');
        // if (validateEmail(email)) {
        //     wrong_email.textContent = '';
        //     fetch(`https://bluguard37.herokuapp.com/update_user_info/${username}/${email}/`, {
        //         headers: {
        //             'Authorization': `Token ${Token.token}`,
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             // console.log(data);
        //         })
        //         .catch(err => console.log(err));
        // } else {
        //     wrong_email.textContent = 'Invalid email';
        // }
    }

    useEffect(() => {
        document.querySelector('#device-type').focus();
    }, []);

    return (
        <div className="settings-page">
            <h3>Create Device</h3>
            <div className="settings-div">
                <h4>Create new Device</h4>
                <div className="user-info-div">
                    <div className="settings-form create-device-form">
                        <input
                            type="text"
                            id="device-type"
                            placeholder={"Device Type"}
                            value={deviceType}
                            onChange={(e) => changedeviceType(e)}
                        />
                        <input
                            type="text"
                            id="device-serial-no"
                            placeholder={"Device Serial No"}
                            value={deviceSerialNo}
                            onChange={(e) => changedeviceSerialNo(e)}
                        />
                        <input
                            type="text"
                            id="wearer-id"
                            placeholder={"Wearer ID"}
                            value={wearerId}
                            onChange={(e) => changewearerId(e)}
                        />
                        <input
                            type="text"
                            id="device-mac"
                            placeholder={"Device Mac"}
                            value={deviceMac}
                            onChange={(e) => changedeviceMac(e)}
                        />
                        <input
                            type="submit"
                            id="btn-update"
                            value="Create Device"
                            className="button-61"
                            onClick={(e) => updateInfo(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateDevice;
