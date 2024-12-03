import { createGlobalStyle } from "styled-components"
import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFF',
            
        },
        secondary: {
            main: 'rgb(144, 202, 249)',
        },
        
        background: {
            paper: 'rgb(66, 66, 66)',
        }
    },
    components: {
        MuiStepIcon: {
            styleOverrides: {
                active: {
                    color: 'rgb(144, 202, 249)',
                }
            }
        }
    },
    colors: {
        primary: 'rgb(144, 202, 249)',
        secondary: 'rgba(255, 255, 255, 0.7)',
    }
});

export const GlobalStyle =  createGlobalStyle`
    * {
        box-sizing: inherit;
    }

    body {
        color: #FFF;
        margin: 0;
        font-size: 0.875rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        background-color: #121212;
    }`;