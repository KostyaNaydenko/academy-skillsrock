import { Box, createTheme, styled } from "@mui/material";

export const theme = createTheme({
    palette : {
       primary: {
        main: '#1b1b1d',
        contrastText: '#fff',
       },
       secondary: {
        main: '#578368',
       }
    }
});

export const MainDiv = styled('div')`
    background-color: #121212;
    display: flex;
    height: 100vh;
    width: 100%;

`;

export const BoxCard = styled(Box)`
    height: 250px;
    width: auto;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 280px;
    min-height: 300px;
    box-shadow: 24;
    border-radius: 15px;
  
`;

export const ModalBoxCart = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    max-width: 1000px;
    height: auto;
    box-shadow: 24;
    border-radius: 15px;
  
`;