import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Copyright from "./components/Copyright";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI v5 Template - Styled Components Engine
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
