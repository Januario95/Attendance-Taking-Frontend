import React, { useState, useEffect } from 'react';


const Footer = () => {
    const [date, dateSet] = useState(new Date());

    useEffect(() => {
        //
    }, []);

    return (
        <div className="footer-section">
            <p>© {date.getFullYear()} Hayysoft Systems Pte</p>
        </div>
    );
}

export default Footer;
