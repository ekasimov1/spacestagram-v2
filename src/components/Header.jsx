import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Typography, Grid } from "@mui/material";

function Header() {
  return (
    <Grid container spacing={0} justifyContent="center" mt={8}>
      <Grid item xs={12}>
        <Typography variant="h1" sx={{ fontSize: {xs: "2.8em", sm: "4em", md: "4em"}, textAlign: "center" }}>
          <RocketLaunchIcon sx={{ fontSize: "4rem" }} /> Spacestagram
        </Typography>
      </Grid>
    </Grid>
  );
}
export default Header;

