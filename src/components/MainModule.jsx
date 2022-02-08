import React, { useState } from "react";
import Picture from "./Picture";
import Day from "./Day";
import { Grid, Typography } from "@mui/material";

function MainModule() {
  const [currentDay, setCurrentDay] = useState(new Date());

  return (
    <Grid item container justifyContent="flex-start" spacing={0}>
      <Grid item xs={12} md={3} align="center" mb={3}>
        <Day selectedDay={currentDay} onChangeDay={setCurrentDay} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Picture selectedDay={currentDay} />
      </Grid>
    </Grid>
  );
}

export default MainModule;
