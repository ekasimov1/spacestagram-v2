import React from "react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Typography, Grid } from "@mui/material";


function Header() {
    return (
    <Grid item lg={12} container justifyContent="center" spacing={2}>
    <Grid item lg="auto" > 
    <RocketLaunchIcon sx={{ fontSize: 65 }}/>
    </Grid>
    <Grid item lg="auto"> 
    <Typography variant="h1" fontSize="4rem">Spacestagram</Typography>
    </Grid>
    </Grid>
    );
    
}
export default Header;

//<div>
//<h1>Spacestagram</h1>
//<h2>Astronomy Picture of the Day</h2>
 //   </div>