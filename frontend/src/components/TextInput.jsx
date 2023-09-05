import { TextField } from "@mui/material";

const TextInput = ({ placeholder }) => {
  return (
    <TextField placeholder={placeholder} variant="outlined" focused></TextField>
  );
};

export default TextInput;
