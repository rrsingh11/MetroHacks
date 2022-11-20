import React from "react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import '../styles/Resources.css'


export default function ResourceCard(props) {

    return (
        <div className="resource--card">
            <img src={props.resource.image} alt="" />
            <CircularProgress value={props.resource.quantity} />
            <h1>{props.resource.name}</h1>
        </div>

    )
}