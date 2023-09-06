import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const CustomSelectInput = ({
  style,
  itemValues,
  value,
  handleChange,
  renderValue,
}) => {
  return (
    <FormControl sx={style}>
      <Select
        onChange={handleChange}
        multiple
        value={value}
        notched
        renderValue={() => renderValue}
        displayEmpty
      >
        {itemValues.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectInput;
