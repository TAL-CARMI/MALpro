import { forwardRef } from "react";
import GenresList from "./GenresList";
import PopularityChoice from "./PopularityChoice";
import RatingRange from "./RatingRange";
import UserListInput from "./UserListInput";
import UserToggle from "./UserToggle";
import { Box, Button } from "@mui/material";

const SearchBar = forwardRef(
  (
    {
      useUserList,
      handleSearchToggle,
      selectedGenres,
      handleSelectedGenres,
      selectedPopularity,
      handleSelectedPopularity,
      ratingValues,
      ratingHandleChange,
      handleShowExtraFilters,
      handleShowAnimeCard,
    },
    ref
  ) => {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <UserToggle
          useUserList={useUserList}
          handleSearchToggle={handleSearchToggle}
        />
        {useUserList === "list" && <UserListInput ref={ref} />}
        <GenresList
          selectedGenres={selectedGenres}
          handleSelectedGenres={handleSelectedGenres}
        />
        <PopularityChoice
          selectedPopularity={selectedPopularity}
          handleSelectedPopularity={handleSelectedPopularity}
        />
        <RatingRange
          sliderValues={ratingValues}
          handleChange={ratingHandleChange}
        />
        <Button onClick={handleShowExtraFilters} variant="contained">
          More Filters
        </Button>
        <Button onClick={handleShowAnimeCard} variant="contained">
          GO
        </Button>
      </Box>
    );
  }
);

export default SearchBar;
