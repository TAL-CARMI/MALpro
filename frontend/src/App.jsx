import { ThemeProvider } from "@emotion/react";
import { Box, Typography, Slide, Input } from "@mui/material";
import "./App.css";
import malTheme from "./Theme";
import {Button} from "@mui/material";
import { useRef, useState } from "react";


function App() {

  const [showAnimeCard, setShowAnimeCard] = useState(false);

  return (
    <ThemeProvider theme={malTheme}>
    <Typography sx={{color: "white", paddingLeft: "2vw", paddingTop: "2vh", marginBottom: "2vh", fontWeight: "bold"}} variant="h3">MALpro</Typography>
    <div className="app">
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <Box sx={{display: "flex", justifyContent: "center", width: showAnimeCard ? "60vw" : "30vw", height: "65vh"}}> 
        <Box sx={{display:"grid", gridTemplateRows: "8", width: showAnimeCard ? "50%" : "100%", border: "4px solid #F7465F", }}>
          
          </Box> 
        {<Box sx={{width: showAnimeCard ? "50%" : "0%", border: showAnimeCard ?"4px solid #E63C8B" : "0px none", transition: "width 0.5s"}}></Box>}
      </Box>
      <Button onClick={() => setShowAnimeCard(true)} sx={{height: "5vh", marginTop: "2vh", alignSelf: showAnimeCard ? "flex-end" : "center"}} color="primary" variant="outlined">GENERATE</Button>
      </Box>
      </div>
      </ThemeProvider>
  );
}

export default App;
