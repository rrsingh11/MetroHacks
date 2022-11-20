import React from "react";
import '../styles/profile.css'
export default function Profile(props) {
    return (
        <>
        <div className='heading--bar'>
            <h1 className="go--back">&lt; Go back</h1> {/* This is a link to the home page */}
            <h1 className="title">Profile Details</h1>
        </div>
        <div className='update--info'>
            <p className="font-bold">Hospital Name</p>
            <p>Name : {props.name}</p>
            <p>Email : {props.email}</p>
            <p>Unique Id : {props.uniqueId}</p>

            <button>Add Resources</button> {/* This button will be used to add resources */}
        </div>
        </>
    );
}