import React from "react";
import {AppBar, Box, Button, Checkbox, Paper, Stepper, styled} from "@mui/material";
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgb(144, 202, 249)',
            dark: 'rgb(144, 202, 249)',
        },
        secondary: {
            main: 'rgb(144, 202, 249)',
        },
        
        background: {
            default: '#121212',
            secondary: 'rgb(33, 33, 33)',
            paper: '#424242',
        }
    },
});

export const Main = styled('main')`
  width: 600px;
  margin: 0 auto;
  margin-top: 112px;
  @media (max-width: 600px) {
    width: 90%;
    }`;

export const CheckoutPaper = styled(Paper)(({theme})=>({
    marginBottom: '48px',
    marginTop: '48px',
    paddingBottom: '24px',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '24px',
    background: theme.palette.background.paper,
}));

export const CheckoutAppBar = styled(AppBar)(({theme})=>({
   background: theme.palette.background.secondary,
}));

export const CheckoutStepper = styled(Stepper)`
    padding: 24px 0px 40px;
    align-items: center;
`;

export const ButtonNext = styled(Button)(()=>({
    marginTop: '24px',
    marginLeft: '8px',
}));

export const ButtonBack = styled(Button)(()=>({
    color: '#FFF',
    marginTop: '24px',
    marginLeft: '8px',
}))

export const CheckBoxCheckout = styled(Checkbox)(()=>({
    ":hover": {
        backgroundColor: 'rgba(244, 143, 177, 0.08)'
    },
    '&.Mui-checked': {
        color: 'rgb(244, 143, 177)',
    },      
 }));

 export const BoxCentered = styled(Box)`
   display: flex;
   justify-Content: center; 
   align-Items: center;
 `;