import GenresList from "./GenresList";
import PopularityChoice from "./PopularityChoice";
import RatingRange from "./RatingRange";
import UserToggle from "./UserToggle";
import { Box, Button } from "@mui/material";

export default function SearchBar({ ratingValues, ratingHandleChange }) {
  return (
    <Box sx={{ display: "flex" }}>
      <UserToggle />
      <GenresList />
      <PopularityChoice />
      <RatingRange
        sliderValues={ratingValues}
        handleChange={ratingHandleChange}
      />
      <Button variant="contained">More Filters</Button>
      <Button variant="contained">GO</Button>
    </Box>
  );
}
