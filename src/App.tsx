import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MuiThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <Container>
        <Button variant="outlined" color="secondary"> Hello </Button>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
