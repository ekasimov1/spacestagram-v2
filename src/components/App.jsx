import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Grid } from "@mui/material";
import MainModule from "./MainModule";

function App() {
  return (
    <Container sx={{ padding: { xs: "0px" } }}>
      <Grid container rowSpacing={5}>
        <Header />
        <MainModule />
        <Footer />
      </Grid>
    </Container>
  );
}
export default App;
