import { Slider, Typography, Box, Container } from "@mui/material";

export default function RatingRange({ sliderValues, handleChange }) {
  return (
    <>
      <Container
        style={{
          backgroundColor: "turquoise",
          maxWidth: "200px",
          display: "flex",
          flexDirection: "column",
          margin: "0px",
          alignItems: "center",
        }}
      >
        <Typography>Rating</Typography>
        <Slider
          min={0}
          max={10}
          onChange={(event) => handleChange(event.target.value)}
          value={sliderValues}
          valueLabelDisplay="auto"
        ></Slider>
      </Container>
    </>
  );
}
