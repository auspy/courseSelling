import { createTheme } from "@mui/material";
const primary = "#cf4e16";
const white = "#fafafa";
const lightWhite = "#fafafa50";
const lightBg = "#484848";
const darkBg = "#1f1f1f";
const red = "#c32828";
const green = "#0F9E26";
// const blue = "#2196f3";
const blue = "#1d85d7";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#cf4e16", // Replace with your custom primary color
    },
    secondary: {
      main: "#383838", // Replace with your custom secondary color
    },
    error: {
      main: red,
    },
    success: {
      main: green,
    },
    info: {
      main: blue,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "outlined" && {
            backgroundColor: darkBg,
            color: muiTheme.palette[ownerState.severity!].main,
          }),
          ...(ownerState.variant === "filled" && {
            color: darkBg,
            border: "1px solid var(--dark-bg)",
          }),
        }),
      },
    },
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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: darkBg,
          minWidth: 280,
          padding: "30px 20px",
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          height: "auto",
          backgroundColor: darkBg,
          borderTop: "1px solid #383838",
          padding: 5,
          ".Mui-selected": {
            backgroundColor: lightBg,
            borderRadius: 10,
          },
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          gap: 3,
          boxSizing: "content-box",
          padding: 8,
        },
        label: {
          fontSize: 14,
          textTransform: "capitalize",
        },
      },
    },
  },
});
export default muiTheme;
