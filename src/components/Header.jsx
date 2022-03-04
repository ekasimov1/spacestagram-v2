import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Typography, Grid } from "@mui/material";

function Header() {
  return (
    <Grid container spacing={0} justifyContent="center" mt={8}>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.8em", sm: "4em", md: "4em" },
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RocketLaunchIcon
            sx={{
              fontSize: { xs: "2.8rem", sm: "4rem", md: "4rem" },
              marginBottom: "10px",
              marginRight: "5px",
            }}
          />
          Spacestagram
        </Typography>
      </Grid>
    </Grid>
  );
}
export default Header;
