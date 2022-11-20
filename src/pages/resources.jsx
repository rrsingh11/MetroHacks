import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ResourceData from '../data/resources.js'
import ResourceCard from '../components/ResourceCard.jsx'
import '../styles/Resources.css'


export default function Resources() {
    const {hospitalId} = useParams();

    const[cards, setCards] = useState([]);
    const[loaded, setLoaded] = useState(false);


    useEffect(() => {
        if(!loaded) {
            async function loadCards() {
                ResourceData.getByHospital(hospitalId)
                    .then((resources) => {
                        const r = resources.map((resource) => {
                            return <ResourceCard resource={resource} />
                        })
                        setCards(r)
                    })
            }
            loadCards();
            setLoaded(true);
        }
    })


    return (
        <>
            <div className="navbar">
                <h1 className="go--back"> &lt; Go Back </h1>
                <h1 className="resource--title">Resources</h1>
            </div>
                <React.Suspense fallback='Loading hospital data...'>
                    <div className="resource--section">
                        {cards}
                    </div>
                </React.Suspense>
        </>
    )
}