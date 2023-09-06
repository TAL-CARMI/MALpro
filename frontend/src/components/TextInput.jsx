import { TextField } from "@mui/material";
import { forwardRef, useImperativeHandle, useRef } from "react";

const TextInput = forwardRef(({ placeholder }, ref) => {
  return (
    <TextField
      inputRef={ref}
      placeholder={placeholder}
      variant="outlined"
      focused
    ></TextField>
  );
});

export default TextInput;
