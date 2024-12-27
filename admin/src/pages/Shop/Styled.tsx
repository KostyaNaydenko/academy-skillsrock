import { Box, Paper, Card } from "@mui/material";
import styled from 'styled-components';

export const BoxCard = styled(Box)`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    height: 250px;
`;

export const BoxCart = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    min-width: 500px;
    min-height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1000px;
    box-shadow: 24;
    border-radius: 15px;
`;

export const CartPaper = styled(Paper)`
    min-width: 500px;
    margin: 10px; 
    display: flex; 
    justify-content: space-around; 
    align-items:center;
`;

export const ShopProductCard = styled(Card)`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    padding: 20px; 
    height: 75%;
`;


export const CardMain = styled.main`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    flex-direction: column;
`;

export const CloseButtonDiv = styled.div`
    display: flex; 
    justify-content: end; 
    margin: 0;
    padding: 0;
`;

export const DataDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
`;

export const CardButtonsDiv = styled.div`
    display: flex;
    justify-content: space-around;  
    width: 100%; 
    margin-top: 20px;
`;







