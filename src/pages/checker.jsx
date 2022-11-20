import React, {useEffect, useRef, useState} from "react"
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import mapboxgl from 'mapbox-gl';
import geoJson from "./test-cities.json";
import hospitals from "./test-hospitals.json";
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
import 'mapbox-gl/dist/mapbox-gl.css';
//import Hero from '../assets/hero.svg'
//import Feat from '../assets/feat.svg'
import { Link } from "react-router-dom";

//const root = createRoot(document.getElementById("root"));
const Marker = ({ onClick, hospital }) => {
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
}

export default function Checker() {
    const mapContainer = useRef(null);
    const map = useRef(null);
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

        console.log(hospitals);
        hospitals.forEach((hospital) => {
            console.log(hospital);
            const ref = React.createRef();
            ref.current = GetMarker(markerClicked, hospital);


            /*root.render(
                <Marker onClick={markerClicked} hospital={hospital}/>,
                ref.current
            );*/

            new mapboxgl.Marker(ref.current)
                .setLngLat([hospital.longitude, hospital.latitude])
                .addTo(map.current);
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    const markerClicked = (title) => {
        window.alert(title);
    };

    return (
        <div className="md:mx-28 mx-4 pb-12 w-full">
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
                <div ref={mapContainer} className="map-container w-full h-96 mb-6"/>
        </div>
    )
}
