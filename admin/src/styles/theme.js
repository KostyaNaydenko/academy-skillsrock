import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: { xs: 320, sm: 632, md: 960, lg: 1280, xl: 1920 },
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    text: { main: "rgba(0, 0, 0, 0.87)" },
    background: { mainPaper: "#424242" },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",

    buttonSmall: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },

    mainPaperP: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },

    postsP: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "28px",
      letterSpacing: "0.00938em",
    },
  },
});

export default theme;