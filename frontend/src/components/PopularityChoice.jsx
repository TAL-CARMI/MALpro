import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
  ListItemText,
} from "@mui/material";

export default function PopularityChoice({
  selectedPopularity,
  handleSelectedPopularity,
}) {
  const popularityArray = ["Underground", "Average", "Popular"];

  const handleToggle = (popularity) => () => {
    const updatedSelectedPopularity = selectedPopularity.includes(popularity)
      ? selectedPopularity.filter(
          (selectedPopularity) => selectedPopularity !== popularity
        )
      : [...selectedPopularity, popularity];

    handleSelectedPopularity(updatedSelectedPopularity);
  };

  return (
    <FormControl variant="filled" style={{ width: "200px" }}>
      <InputLabel id="popularity-list">Popularity</InputLabel>
      <Select
        sx={{ height: "100%" }}
        value={selectedPopularity}
        labelId="popularity-list"
        renderValue={() => ""}
        multiple
      >
        {popularityArray.map((popularity) => {
          return (
            <MenuItem key={popularity}>
              <Checkbox
                checked={selectedPopularity.indexOf(popularity) > -1}
                onChange={handleToggle(popularity)}
              />
              <ListItemText primary={popularity} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
