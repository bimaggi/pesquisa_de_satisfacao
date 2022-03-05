import React from "react";
import Home from "../Home";
import { createTheme, ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2057b0',
      contrastText: 'white',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={customTheme}>
     <Home/>
    </ThemeProvider>
  );
}

export default App;
