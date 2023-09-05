import { createTheme } from "@mui/material/styles";

const malTheme = createTheme({
  palette: {
    primary: {
      main: "#F7465F",
      light: "#F7465F",
      dark: "#F7465F",
      contrastText: "#F7465F",
    },
    text: {
      primary: "#F7465F",
    },
    secondary: {
      main: "#E63C8B",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&::placeholder": {
            textAlign: "center",
            fontSize: "10px",
          },
        },
      },
    },
  },
});

export default malTheme;
