import { Box, Typography } from "@mui/material";

const AnimeCard = ({ name, cover, genre }) => {
  return (
    <Box sx={{ backgroundColor: "grey" }}>
      <Typography varient="h1">{name}</Typography>
      <Box component="img" src={cover} sx={{ height: 600, width: 432 }}></Box>
      <Typography varient="h2">{genre}</Typography>
    </Box>
  );
};

export default AnimeCard;
