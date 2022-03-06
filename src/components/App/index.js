import React from "react";
import Home from "../views/Home";
import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import SearchBoard from "../views/SearchBoard";

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
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/pesquisa" element={ <SearchBoard/> }/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
