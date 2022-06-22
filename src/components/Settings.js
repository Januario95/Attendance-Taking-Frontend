import React, { useState, useEffect } from 'react';
import {Token} from './Token';

const Settings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const changeUsername = e => {
        setUsername(e.target.value);
    }

    const changeEmail = e => {
        setEmail(e.target.value);
    }

    const validateEmail = email => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const fetchUser = () => {
        fetch(`${Token.dev.URL}/fetch_user_info/`, {
            headers: {
                'Authorization': `Token ${Token.dev.token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUsername(data.username);
                setEmail(data.email);

            })
            .catch(err => console.log(err));
    }

    const updateInfo = e => {
        let wrong_email = document.querySelector('.wrong-email');
        if (validateEmail(email)) {
            wrong_email.textContent = '';
            fetch(`${Token.dev.URL}/update_user_info/${username}/${email}/`, {
                headers: {
                'Authorization': `Token ${Token.dev.token}`,
                'Content-Type': 'application/json'
            }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                })
                .catch(err => console.log(err));
        } else {
            wrong_email.textContent = 'Invalid email';
        }
    }

    useEffect(() => {
        document.querySelector('#email').focus();
        // fetchUser();
    }, []);

    return (
        <div className="settings-page">
            <h3>Settings</h3>
            <div className="settings-div">
                <h4>Update User Information</h4>
                <div className="user-info-div">
                    <div className="settings-form">
                        {/*<input
                            type="text"
                            id="username"
                            placeholder="Update username"
                            value={username}
                            disabled
                            onChange={(e) => changeUsername(e)}
                        /> */}
                        <span className="wrong-email"></span>
                        <input
                            type="email"
                            id="email"
                            placeholder="Update email"
                            value={email}
                            onChange={(e) => changeEmail(e)}
                        />
                        <input
                            type="submit"
                            id="btn-update"
                            value="Update"
                            onClick={(e) => updateInfo(e)}
                        />
                    </div>
                    <div className="user-info">
                        <p className="username-info">Username: {username}</p>
                        <p className="email-info">Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
