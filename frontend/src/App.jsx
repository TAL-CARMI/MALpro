import { Box, Slide } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { useRef, useState } from "react";
import ExtraFilters from "./components/ExtraFilters";
import AnimeCard from "./components/AnimeCard";

function App() {
  const [useUserList, setUseUserList] = useState("public");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPopularity, setSelectedPopularity] = useState([]);
  const [ratingValues, setRatingValues] = useState([0, 10]);
  const [showExtraFilters, setShowExtraFilters] = useState(false);
  const [showAnimeCard, setShowAnimeCard] = useState(false);

  const searchRef = useRef();

  function handleSearchToggle(value) {
    setUseUserList(value);
  }

  function handleShowExtraFilters() {
    setShowExtraFilters(!showExtraFilters);
  }

  function handleShowAnimeCard() {
    setShowAnimeCard(true);
  }

  return (
    <>
      <Slide direction="up" in={showAnimeCard} mountOnEnter unmountOnExit>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {showAnimeCard && (
            <AnimeCard
              name={"Code Geass"}
              cover={
                "https://cdn.myanimelist.net/images/anime/1792/138022l.jpg"
              }
              genre={"action"}
            />
          )}
        </Box>
      </Slide>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form>
          <SearchBar
            useUserList={useUserList}
            handleSearchToggle={handleSearchToggle}
            selectedGenres={selectedGenres}
            handleSelectedGenres={setSelectedGenres}
            selectedPopularity={selectedPopularity}
            handleSelectedPopularity={setSelectedPopularity}
            ratingValues={ratingValues}
            ratingHandleChange={setRatingValues}
            handleShowExtraFilters={handleShowExtraFilters}
            handleShowAnimeCard={handleShowAnimeCard}
            ref={searchRef}
          />

          <Slide
            direction="down"
            in={showExtraFilters}
            mountOnEnter
            unmountOnExit
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {showExtraFilters && <ExtraFilters />}
            </Box>
          </Slide>
        </form>
      </Box>
    </>
  );
}

export default App;
