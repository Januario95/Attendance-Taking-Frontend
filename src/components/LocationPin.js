import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerClusterer from '@google/markerclusterer';


const API_KEY = 'AIzaSyDLU-BsprUwoj-kRf8Q7Iidu9Th1jRBzjw';
const defaultPost = {
    center: {
        lat: 59.95,
        lng: 30.33,
    },
    zoom: 11
}

const LocationPin = ({ text }) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = './markerclusterer.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);


    const setGoogleMapRef = (map, maps) => {
        // googleMapRef = map;
        // googleRef = maps;
        let locations = [
            {lat: -31.563910, lng: 147.154312},
            {lat: -33.718234, lng: 150.363181},
            {lat: -33.727111, lng: 150.371124}
        ];
        let markers = locations && locations.map((location) => {
            return new maps.Marker({position: location})
        })
        let markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
            gridSize: 10,
            minimumClusterSize: 2
        })
    }

    return (
        <div className="pin">
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map, maps}) => setGoogleMapRef(map, maps)}
                defaultCenter={{lat: -31.563910, lng: 147.154312}}
                defaultZoom={15}
                options={{streetViewControl: true}}
            >
            </GoogleMapReact>
        </div>
    );
}

export default LocationPin;
