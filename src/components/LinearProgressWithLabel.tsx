import {Box, LinearProgress, LinearProgressProps, Typography} from "@mui/material";
import React from "react";

export function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
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
