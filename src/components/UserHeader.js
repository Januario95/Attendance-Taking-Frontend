import React, {
    useState,
    useEffect,
    useContext
} from 'react';
// import $ from 'jquery';
import Gateways from './Gateways';
import { GeneralContext } from '../contexts/GeneralContext';



const UserHeader = () => {
    const [date, setDate] =  useState(new Date());
    const [showGatewayTable, setShowGatewayTable] = useState(false);
    const [showVitals, setShowVitals] = useContext(GeneralContext);

    const showTable = () => {
        if (showGatewayTable) {
            setShowGatewayTable(false);
        } else {
            setShowGatewayTable(true);
        }
    }

    // const setShowVitals = () => {
    //     console.log
    // }

    return (
        <div>
            <div className="user-section">
                <div className="username-section">
                    Welcome, hayysoft
                </div>
                <div
                    className="online-gateways"
                    onClick={showTable}
                >Online Gateways</div>
                <div
                    className="date-section"
                >Date:
                    {date.getDate()}-
                    {date.getMonth()+1}-
                    {date.getFullYear()}
                </div>
            </div>
            <div className="gateways">
                {showGatewayTable ? (
                    <Gateways />
                    ) : ''
                }
            </div>
        </div>
    );
}

export default UserHeader;
