import { createTheme } from "@mui/material";
const primary = "#cf4e16";
const white = "#fafafa";
const lightWhite = "#fafafa50";
const lightBg = "#484848";
const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#cf4e16", // Replace with your custom primary color
    },
    secondary: {
      main: "#00ff00", // Replace with your custom secondary color
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: white,
          borderRadius: 4,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontFamily: "Raleway",
          color: lightWhite,
          width: "100%",
          borderColor: lightBg,
          "&.Mui-selected": {
            borderColor: primary + "50",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: white, // Change the text color to black
          fontFamily: "Raleway",
        },
        root: {
          filter: "drop-shadow(3px 2px 2px #040404)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: lightBg, // Change the border color to #fafafa
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: lightBg, // Change the border color on hover to #fafafa
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: primary, // Change the border color when focused to #fafafa
          },
          "&:placeholder": {
            color: white,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#fafafa70", // Change the placeholder color to red
          fontSize: 14,
          fontFamily: "Raleway",
          marginTop: "2.4px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: lightWhite,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "#fafafa70",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: lightWhite,
        },
      },
    },
  },
});
export default muiTheme;
