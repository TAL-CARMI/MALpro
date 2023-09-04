import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function UserToggle({ useUserList, handleSearchToggle }) {
  return (
    <>
      <ToggleButtonGroup
        onChange={(event) => handleSearchToggle(event.target.value)}
        value={useUserList}
        exclusive
      >
        <ToggleButton value="public">ALL ANIME</ToggleButton>
        <ToggleButton value="list">CHOOSE FROM LIST</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
