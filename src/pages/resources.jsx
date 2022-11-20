import React from "react";
import { Link } from "react-router-dom";
import ResourceData from '../resources.js'
import ResourceCard from '../components/ResourceCard.jsx'
import '../styles/Resources.css'


export default function Resources() {

    let resources = ResourceData.map((resource) => {
        return <ResourceCard resource={resource} />
    })


    return (
        <>
            <div className="navbar">
                <h1 className="go--back"> &lt; Go Back </h1>
                <h1 className="resource--title">Resources</h1>
            </div>
            <div className="resource--section">
                {resources}
            </div>            
        </>
    )
}