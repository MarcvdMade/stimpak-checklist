import React, {useState} from 'react';
import geenHonger from "../img/categories/geenHonger.png"
import "../styles/Card.css"

import {Box, LinearProgress, LinearProgressProps, Typography} from "@mui/material";

const Card = () => {
    const [progress, setProgress] = useState(60)
    const [seeMore, setSeeMore] = useState(false)

    const openModal = () => {
        console.log("OPEN")
    }

    return (
        <div className="card" id="card" onClick={openModal}>
            <div className="card-header">
                <span>1. Geen honger</span>
                <img src={geenHonger} alt="rover"/>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <h5 style={{marginBottom: 20}}>
                        Betaal je werknemers goed
                    </h5>
                </div>
                {
                    seeMore ?
                        <p className="text-center">
                            Zorg dat 100 werknemers niet naar de voedselbank hoeven.
                        </p> : <></>
                }
                <Box sx={{width: '100%'}}>
                    <LinearProgressWithLabel color="success" value={progress}/>
                </Box>
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
