import React, {useState} from 'react';
import "../styles/Card.css"

import {Box, LinearProgress, LinearProgressProps, Typography} from "@mui/material";
import Modal from "@mui/material/Modal"

interface Card {
    color: any,
    headerTitle?: String,
    imgPath: any,
    title: any,
    body?: String,
    value?: any
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Card = (props: Card) => {
    const [progress, setProgress] = useState(60)
    const [seeMore, setSeeMore] = useState(false)
    const [hover, setHover] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    }

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

    const handleMouseIn = () => {
        setHover(true);
    }

    const handleMouseOut = () => {
        setHover(false);
    }


    return (
        <div className="card" id="card"
             style={{borderBottomColor: props.color, borderBottomWidth: 16, borderBottomStyle: "solid"}}>
            <div className="card-header" style={{backgroundColor: props.color}}>
                <span>{props.headerTitle}</span>
                <img src={props.imgPath} alt="rover"/>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <h5 style={{marginBottom: 20}}>
                        {props.title}
                    </h5>
                </div>
                <Box sx={{width: '100%'}}>
                    <LinearProgressWithLabel color="success" value={props.value}/>
                </Box>
                {
                    seeMore ?
                        <div className="d-flex justify-content-between align-items-end mt-2">
                            <i className="fa-solid fa-chevrons-up p-1" style={{color: props.color}}
                               onClick={handleSeeMore}/>
                            <div className="text-center">
                                <span className="d-block">{props.body}</span>
                                <button className="btn my-2" style={{
                                    borderColor: props.color,
                                    color: hover ? "#fff" : props.color,
                                    background: hover ? props.color : "#fff"
                                }}
                                        onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}
                                        onClick={handleOpenModal}>Open
                                </button>
                            </div>
                            <i className="fa-solid fa-chevrons-up p-1" style={{color: props.color}}
                               onClick={handleSeeMore}/>
                        </div>
                        : <div className="d-flex justify-content-between mt-2" onClick={handleSeeMore}>
                            <i className="fa-solid fa-chevrons-down p-2" style={{color: props.color}}/>
                            <i className="fa-solid fa-chevrons-down p-2" style={{color: props.color}}/>
                        </div>
                }
            </div>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={openModal}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
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
