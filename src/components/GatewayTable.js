import React from 'react';


const GatewayTable = ({
    check_in, check_out, attendee_name
}) => {
    const formatDateTime = datetime => {
        if (datetime === null) {
            return ''
        } else {
            datetime = datetime.split('T');
            let date = datetime[0];
            let time = datetime[1].split('.')[0];
            return date + ' ' + time;
        }
    }

    return (
        <tr>
            <td>{attendee_name}</td>
            <td>{formatDateTime(check_in)}</td>
            <td>{formatDateTime(check_out)}</td>
        </tr>
    );
}


export default GatewayTable;
