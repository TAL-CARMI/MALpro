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
    common: {
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
        notchedOutline: {
          borderColor: "#F7465F",
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#F7465F",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#F7465F",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#202136",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#202136",
        },
      },
    },
  },
});

export default malTheme;
