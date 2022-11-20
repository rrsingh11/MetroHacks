import React from "react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import placeholderImg from "../assets/Patient.png"
import '../styles/Resources.css'


export default function ResourceCard(props) {

    return (
        <div className="resource--card">
            <img src={props.resource.image || placeholderImg} alt="" />
            <CircularProgress value={props.resource.available} >
                <CircularProgressLabel>{props.resource.available}</CircularProgressLabel>
            </CircularProgress>
            <h1>{props.resource.name}</h1>
        </div>

    )
}