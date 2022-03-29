import React, {useState} from 'react';
import geenHonger from "../img/categories/geenHonger.png"
import "../styles/Card.css"

import {Box, LinearProgress, LinearProgressProps, Typography} from "@mui/material";

const Card = () => {
    const [progress, setProgress] = useState(10)

    const openModal = () => {
        console.log("OPEN")
    }

    return (
        <div className="card" id="card">
            <div className="card-header">
                <span>1. Geen honger</span>
                <img src={geenHonger} alt="rover"/>
            </div>
            <div className="card-body">
                <h5 className="text-center mb-3">
                    Betaal je werknemers een salaris om van te leven
                </h5>
                <p className="text-center">
                    Zorg dat 100 werknemers niet naar de voedselbank hoeven.
                </p>
                <Box sx={{width: '100%'}}>
                    <LinearProgressWithLabel color="success" value={progress}/>
                </Box>
            </div>
            <div className="d-flex justify-content-center mb-2">
                <button className="btn warning seeMore" onClick={openModal}>See more</button>
            </div>
        </div>
    )
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: "column"}}>
            <Box sx={{width: '100%', mr: 1}}>
                <LinearProgress variant="determinate" style={{height: "15px", borderRadius: "10px"}} {...props} />
            </Box>
            <Box sx={{minWidth: 35, height: 20}}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default Card;
