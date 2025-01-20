import { AppBar, Box, Button, Checkbox, Paper, Stepper, styled } from "@mui/material";

export const Main = styled('main')(({ theme }) => ({
    width: 600,
    margin: '0 auto',
    marginTop: 112,
    [theme.breakpoints.down('sm')]: {
        width: '90%',
    },
}));

export const CheckoutPaper = styled(Paper)(()=>({
    marginBottom: '48px',
    marginTop: '48px',
    paddingBottom: '24px',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '24px',
}));

export const CheckoutAppBar = styled(AppBar)(({theme})=>({
    background: theme.palette.background.mainPaper,
}));

export const CheckoutStepper = styled(Stepper)({
    padding: '24px 0px 40px',
    alignItems: 'center',
});

export const ButtonNext = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    marginTop: '24px',
    marginLeft: '8px',
}));

export const ButtonBack = styled(Button)(({theme})=>({
    color: theme.palette.text.main,
    marginTop: '24px',
    marginLeft: '8px',
}));

export const CheckBoxCheckout = styled(Checkbox)(({theme})=>({
    ":hover": {
        backgroundColor: theme.palette.checkbox.hover,
    },
    '&.Mui-checked': {
        color: theme.palette.checkbox.checked,
    },      
}));

export const BoxCentered = styled(Box)({
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
});

export const BoxWithButtons = styled(Box)(({
    display: 'flex', 
    justifyContent: 'flex-end',
}));