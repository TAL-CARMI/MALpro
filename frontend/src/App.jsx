import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Divider,
} from "@mui/material";
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
                gridTemplateRows: "repeat(7, 1fr)",
                columnGap: "1vw",
                rowGap: "1vh",
                width: showAnimeCard ? "50%" : "100%",
                border: "4px solid #F7465F",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <TextField
                placeholder="MAL Username"
                variant="outlined"
                focused
              ></TextField>
              <FormControl sx={{ gridColumnStart: "2", gridColumnEnd: "4" }}>
                <InputLabel id="genres-label">Genres</InputLabel>
                <Select
                  multiple
                  value={[]}
                  labelId="genres-label"
                  label="Genres"
                >
                  <MenuItem>Action</MenuItem>
                  <MenuItem>Adventure</MenuItem>
                  <MenuItem>Romance</MenuItem>
                </Select>
              </FormControl>
              <Typography color="primary" variant="h5">
                SCORE
              </Typography>
              <Box
                sx={{
                  gridColumnStart: "2",
                  gridColumnEnd: "4",
                  paddingRight: "1em",
                  paddingLeft: "1em",
                }}
              >
                <Slider
                  valueLabelDisplay="auto"
                  value={[0, 10]}
                  max={10}
                  size="small"
                ></Slider>
              </Box>
              <Typography color="primary" variant="h5">
                POPULARITY
              </Typography>
              <FormControl sx={{ gridColumnStart: "2", gridColumnEnd: "4" }}>
                <InputLabel id="popularity-label">Popularity</InputLabel>
                <Select
                  multiple
                  value={[]}
                  labelId="popularity-label"
                  label="Popularity"
                >
                  <MenuItem>Unpopular</MenuItem>
                  <MenuItem>Average</MenuItem>
                  <MenuItem>Popular</MenuItem>
                </Select>
              </FormControl>
              <Typography color="primary" variant="h5">
                FROM - TO
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gridColumnStart: "2",
                  gridColumnEnd: "4",
                }}
              >
                <TextField
                  placeholder="E.g. 1997"
                  variant="outlined"
                  focused
                ></TextField>
                <Divider
                  sx={{
                    borderWidth: "1px",
                    borderColor: malTheme.palette.primary.main,
                  }}
                  variant="middle"
                />
                <TextField
                  placeholder="E.g. 2023"
                  variant="outlined"
                  focused
                ></TextField>
              </Box>
              <Typography color="primary" variant="h5">
                EPISODES
              </Typography>
              <FormControl sx={{ gridColumnStart: "2", gridColumnEnd: "4" }}>
                <InputLabel id="episodes-label">Over</InputLabel>
                <Select
                  multiple
                  value={[]}
                  labelId="episodes-label"
                  label="Episodes"
                >
                  <MenuItem>12</MenuItem>
                  <MenuItem>24</MenuItem>
                  <MenuItem>50</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="type-label">Type</InputLabel>
                <Select multiple value={[]} labelId="type-label" label="Type">
                  <MenuItem>TV</MenuItem>
                  <MenuItem>OVA</MenuItem>
                  <MenuItem>Film</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ gridColumnStart: "2", gridColumnEnd: "4" }}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  multiple
                  value={[]}
                  labelId="status-label"
                  label="Status"
                >
                  <MenuItem>Airing</MenuItem>
                  <MenuItem>Finished Airing</MenuItem>
                  <MenuItem>Scheduled to Air</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="rating-label">Rating</InputLabel>
                <Select multiple value={[]} labelId="rating-label" label="Type">
                  <MenuItem>13+</MenuItem>
                  <MenuItem>18+</MenuItem>
                  <MenuItem>3+</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ gridColumnStart: "2", gridColumnEnd: "4" }}>
                <InputLabel id="list-status-label">List Status</InputLabel>
                <Select
                  multiple
                  value={[]}
                  labelId="list-status-label"
                  label="ListStatus"
                >
                  <MenuItem>Planning to watch</MenuItem>
                  <MenuItem>Watching</MenuItem>
                  <MenuItem>Completed</MenuItem>
                </Select>
              </FormControl>
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
