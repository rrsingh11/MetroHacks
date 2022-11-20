import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
//import ReactDOM from "react-dom";
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
import 'mapbox-gl/dist/mapbox-gl.css';
import hospitalsData from "../data/hospital.js";
//import Hero from '../assets/hero.svg'
//import Feat from '../assets/feat.svg'

//const root = createRoot(document.getElementById("root"));
/*const Marker = ({ onClick, children, hospital }) => {
    const _onClick = () => {
        onClick(feature.id);
    };

    return (
        <button onClick={_onClick} className="marker">
            {children}
        </button>
    );
};

function GetMarker(onClick, hospital) {
    return <Marker onClick={onClick} hospital={hospital}/>
}*/

export default function Checker() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const navigate = useNavigate();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        /*geoJson.features.map((feature) =>
            new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map.current)
        );*/

        (hospitalsData.getAll())
            .then((hospitals) => {
                hospitals.forEach((hospital) => {
                    const marker = new mapboxgl.Marker()
                        .setLngLat([hospital.longitude, hospital.latitude])
                        .addTo(map.current);
                    marker.getElement().addEventListener('click', () => {
                        navigate(`/resources/${hospital.id}`);
                    });
                });
            })
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

/*    const markerClicked = (title) => {
        window.alert(title);
    };*/

    return (
        <div className="md:mx-28 mx-4 pb-12 w-full">
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
                <div ref={mapContainer} className="map-container w-full h-96 mb-6"/>
        </div>
    )
}
