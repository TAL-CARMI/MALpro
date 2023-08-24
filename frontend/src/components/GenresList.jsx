import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function GenresList() {
  const genres = [
    "Action",
    "Adventure",
    "Avant Garde",
    "Award Winning",
    "Boys Love",
    "Comedy",
    "Drama",
    "Fantasy",
    "Girls Love",
    "Gourmet",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Suspense",
  ];
  return (
    <FormControl variant="filled" style={{ width: "200px" }}>
      <InputLabel id="genres-list">Genres</InputLabel>
      <Select value={[]} labelId="genres-list" multiple>
        {genres.map((genre) => {
          return (
            <MenuItem key={genre}>
              <FormControlLabel
                control={<Checkbox></Checkbox>}
                label={genre}
              ></FormControlLabel>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
