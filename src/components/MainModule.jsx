import React, { useState } from "react";
import Picture from "./Picture";
import Day from "./Day"
import { Grid, Typography } from "@mui/material";


function MainModule() {
    const [currentDay, setCurrentDay] = useState(new Date());

    return (
       
    <Grid item lg={12} container justifyContent="center" spacing={0}>
    <Grid item lg="3" align="center"> <Day selectedDay={currentDay} onChangeDay={setCurrentDay}/></Grid>
    <Grid item lg="6" > 
    <Picture selectedDay={currentDay}/>
    </Grid>
    <Grid item lg="3"> </Grid>
    </Grid>
    );
}

export default MainModule;