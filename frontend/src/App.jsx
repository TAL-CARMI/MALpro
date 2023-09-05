import { ThemeProvider } from "@emotion/react";
import { Box, Typography, TextField } from "@mui/material";
import "./App.css";
import malTheme from "./Theme";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import TextInput from "./components/TextInput";

function App() {
  const [showAnimeCard, setShowAnimeCard] = useState(false);

  return (
    <ThemeProvider theme={malTheme}>
      <Typography
        sx={{
          color: "white",
          paddingLeft: "2vw",
          paddingTop: "2vh",
          marginBottom: "2vh",
          fontWeight: "bold",
        }}
        variant="h3"
      >
        MALpro
      </Typography>
      <div className="app">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              minWidth: "1000px",
              minHeight: "600px",
              display: "flex",
              justifyContent: "center",
              width: showAnimeCard ? "60vw" : "30vw",
              height: "65vh",
            }}
          >
            <Box
              sx={{
                padding: "1%",
                maxWidth: "580px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "repeat(8, 1fr)",
                columnGap: "1vw",
                rowGap: "1vh",
                width: showAnimeCard ? "50%" : "100%",
                border: "4px solid #F7465F",
              }}
            >
              <TextInput placeholder={"MAL Username"} />
            </Box>
            {
              <Box
                sx={{
                  maxWidth: "580px",
                  width: showAnimeCard ? "50%" : "0%",
                  border: showAnimeCard ? "4px solid #E63C8B" : "0px none",
                  transition: "width 0.5s",
                }}
              ></Box>
            }
          </Box>
          <Button
            onClick={() => setShowAnimeCard(true)}
            sx={{
              height: "5vh",
              marginTop: "2vh",
              alignSelf: showAnimeCard ? "flex-end" : "center",
            }}
            color="primary"
            variant="outlined"
          >
            GENERATE
          </Button>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
