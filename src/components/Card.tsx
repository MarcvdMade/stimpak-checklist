import React, {useEffect, useState} from 'react';
import "../styles/Card.css"

import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
    Fade
} from "@mui/material";
import Modal from "@mui/material/Modal"
import confetti from "canvas-confetti";
import {LinearProgressWithLabel} from "./LinearProgressWithLabel";

interface Card {
    color: any,
    headerTitle?: String,
    imgPath: any,
    title: any,
    body?: String,
    value?: any
    tasks?: any[]
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};


const Card = (props: Card) => {
    const [progress, setProgress] = useState(0)
    const [seeMore, setSeeMore] = useState(false)
    const [hover, setHover] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
    }, [])

    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleMouseIn = () => {
        setHover(true);
    }

    const handleMouseOut = () => {
        setHover(false);
    }

    const handleCheckItem = (item: any, event: React.ChangeEvent<HTMLInputElement>) => {
        item.checked = event.target.checked
        let totalTrue = 0;
        if (props.tasks && props.tasks.length > 0) {
            props?.tasks?.map((task) => {
                if (task.checked == true) {
                    totalTrue++
                }
            })
            if (totalTrue == props.tasks.length) {
                confetti({
                    particleCount: 100,
                    angle: 60,
                    spread: 70,
                    origin: { x: 0, y: 0.9 }
                });
                confetti({
                    particleCount: 100,
                    angle: 120,
                    spread: 70,
                    origin: { x: 1, y: 0.9 }
                });
            }
            setProgress(totalTrue / props.tasks.length * 100)
        }
        console.log(item, progress, "AYY")
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
                    <LinearProgressWithLabel color="success" value={progress}/>
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
                onClose={handleCloseModal}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h4" component="h2" align={"center"}>
                            {props.title}
                        </Typography>
                        <Typography variant="h6" component="h6" align={"center"}>
                            {props.body}
                        </Typography>
                        <FormGroup style={{marginTop: 10, display: "flex", alignContent: "center"}}>
                            {props.tasks ? props.tasks.map((item, key) => {
                                    return (
                                        <FormControlLabel
                                            control={<Checkbox onChange={($event) => handleCheckItem(item, $event)}
                                                               color="success"/>} label={item.text}/>
                                    )
                                })
                                :
                                <Typography variant="h5" component="h6" align={"center"}>
                                    No tasks present
                                </Typography>}
                        </FormGroup>
                        <Box sx={{width: '100%', marginTop: 5}}>
                            <LinearProgressWithLabel color="success" value={progress}/>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default Card;
