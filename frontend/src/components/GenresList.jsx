import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
  ListItemText,
} from "@mui/material";

const GenresList = ({ selectedGenres, handleSelectedGenres }) => {
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

  const handleToggle = (genre) => () => {
    const updatedSelectedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      : [...selectedGenres, genre];

    handleSelectedGenres(updatedSelectedGenres);
  };

  return (
    <FormControl variant="filled" style={{ width: "200px" }}>
      <InputLabel id="genres-list">Genres</InputLabel>
      <Select
        sx={{ height: "100%" }}
        value={selectedGenres}
        labelId="genres-list"
        onChange={() => {}} // We don't need to handle the Select's onChange
        renderValue={() => ""}
        multiple
      >
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            <Checkbox
              checked={selectedGenres.includes(genre)}
              onChange={handleToggle(genre)} // Use handleToggle for checkbox change
            />
            <ListItemText primary={genre} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenresList;
