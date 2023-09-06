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
import CustomSelectInput from "./components/CustomSelectInput";
import {
  genreList,
  popularitiesList,
  episodeOptions,
  typeList,
  statusOptions,
  listStatusOptions,
  ratingOptions,
} from "./utilities/optionArrays";

function App() {
  const [showAnimeCard, setShowAnimeCard] = useState(false);
  const [popularities, setPopularities] = useState([]);
  const [genres, setGenres] = useState([]);
  const [episodeCount, setEpisodeCount] = useState([]);
  const [types, setTypes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [listStatuses, setListStatuses] = useState([]);
  const [ratings, setRatings] = useState([]);
  const usernameRef = useRef(null);
  const fromYearRef = useRef(null);
  const toYearRef = useRef(null);

  const handleTest = () => {
    setShowAnimeCard(true);
  };

  const handlePopularitiesChange = (event) => {
    setPopularities(event.target.value);
  };

  const handleGenresChange = (event) => {
    setGenres(event.target.value);
  };

  const handleEpisodeChange = (event) => {
    setEpisodeCount(event.target.value);
  };

  const handleTypesChange = (event) => {
    setTypes(event.target.value);
  };

  const handleStatusesChange = (event) => {
    setStatuses(event.target.value);
  };

  const handleListStatusesChange = (event) => {
    setListStatuses(event.target.value);
  };

  const handleRatingsChange = (event) => {
    setRatings(event.target.value);
  };

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
              <TextInput placeholder={"MAL Username"} ref={usernameRef} />
              <CustomSelectInput
                style={{ gridColumnStart: "2", gridColumnEnd: "4" }}
                itemValues={genreList}
                value={genres}
                handleChange={handleGenresChange}
                renderValue={"Genres"}
              />
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
              <CustomSelectInput
                style={{ gridColumnStart: "2", gridColumnEnd: "4" }}
                itemValues={popularitiesList}
                value={popularities}
                handleChange={handlePopularitiesChange}
                renderValue={"Popularity"}
              />

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
                <TextInput placeholder={"E.g. 1997"} ref={fromYearRef} />
                <Divider
                  sx={{
                    borderWidth: "1px",
                    borderColor: malTheme.palette.primary.main,
                  }}
                  variant="middle"
                />
                <TextInput placeholder={"E.g. 2023"} ref={toYearRef} />
              </Box>
              <Typography color="primary" variant="h5">
                EPISODES
              </Typography>
              <CustomSelectInput
                style={{ gridColumnStart: "2", gridColumnEnd: "4" }}
                itemValues={episodeOptions}
                value={episodeCount}
                handleChange={handleEpisodeChange}
                renderValue={"Less then"}
              />
              <CustomSelectInput
                style={{}}
                itemValues={typeList}
                value={types}
                handleChange={handleTypesChange}
                renderValue={"Type"}
              />
              <CustomSelectInput
                style={{ gridColumnStart: "2", gridColumnEnd: "4" }}
                itemValues={statusOptions}
                value={statuses}
                handleChange={handleStatusesChange}
                renderValue={"Status"}
              />
              <CustomSelectInput
                style={{}}
                itemValues={ratingOptions}
                value={ratings}
                handleChange={handleRatingsChange}
                renderValue={"Rating"}
              />
              <CustomSelectInput
                style={{ gridColumnStart: "2", gridColumnEnd: "4" }}
                itemValues={listStatusOptions}
                value={listStatuses}
                handleChange={handleListStatusesChange}
                renderValue={"Your List Status"}
              />
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
            onClick={handleTest}
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
