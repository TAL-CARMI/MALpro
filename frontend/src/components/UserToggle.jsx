import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function UserToggle() {
  return (
    <>
      <ToggleButtonGroup exclusive>
        <ToggleButton value="public">ALL ANIME</ToggleButton>
        <ToggleButton value="list">CHOOSE FROM LIST</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
