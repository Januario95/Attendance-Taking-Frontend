import React, { useState, useEffect } from 'react';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';
import IconRed from '../Staticfiles/red-icon2-removebg.png';
import IconBlue from '../Staticfiles/blue-icon2-removebg.png';
import MapComp from './MapComp.js';


const API_KEY = 'AIzaSyDLU-BsprUwoj-kRf8Q7Iidu9Th1jRBzjw';
const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, California',
    lat: 1.3717726,
    lng: 103.8194992
}
const containerStyle = {
    width: '800px',
    height: '350px'
};
const center = {
    lat: -3.745,
    lng: -38.523
};

const info = 'Alerts: ';

const GoogleMapComp = () => {
    const [lat, setLat] = useState(59.95);
    const [lng, setLng] = useState(30.33);
    const [zoom, setZoom] = useState(11);
    const [gateways, setGateways] = useState([]);
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const handlClick = e => {
        if (showInfoWindow) {
            setShowInfoWindow(false);
        } else {
            setShowInfoWindow(true);
        }
    }

    const onMouseOver = e => {

    }

    const handleMouseOver = e => {
        setShowInfoWindow(true);
    }

    const handleMouseExit = e => {
        setShowInfoWindow(false);
    }

    const fetchGateways = () => {
        const URL = 'https://bluguard37.herokuapp.com/gateways-frontend/';
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setGateways(data.Gateway);
            })
            .catch(err => console.log(err));
    }

    const getGatewayIcon = status => {
        let icon = '';
        if (status === 'ONLINE') {
            icon = {IconBlue};
        } else if (status === 'OFFLINE') {
            icon = {IconRed};
        }
        return icon;
    }

    const mouseOver = () => {
        console.log('Yes');
    }

    useEffect(() => {
        let setInterval1 = setInterval(fetchGateways, 10000);
        // fetchGateways();
    }, []);

    return (
        <div className="google-map-div">
            <LoadScript
                googleMapsApiKey={API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={zoom}
                >
                    {gateways.map((location, index) => {
                        let loc = {
                            lat: parseFloat(location.lat),
                            lng: parseFloat(location.lng),
                            address: location.Gateway_Location
                        }
                        return (
                            <Marker
                                key={index}
                                position={loc}
                                icon={location.Status === 'ONLINE' ? IconBlue : IconRed}
                                onClick={handlClick}
                            >
                                {showInfoWindow && (
                                    <InfoWindow>
                                        <h4>{location.Status}. Alerts: {location.Total_Alerts}</h4>
                                    </InfoWindow>
                                )}
                            </Marker>
                        )
                    })}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default GoogleMapComp;
