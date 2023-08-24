import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function PopularityChoice() {
  const popularityArray = ["Undergruond", "Average", "Popular"];
  return (
    <FormControl variant="filled" style={{ width: "200px" }}>
      <InputLabel id="genres-list">Popularity</InputLabel>
      <Select value={[]} labelId="genres-list" multiple>
        {popularityArray.map((popularity) => {
          return (
            <MenuItem key={popularity}>
              <FormControlLabel
                control={<Checkbox></Checkbox>}
                label={popularity}
              ></FormControlLabel>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
