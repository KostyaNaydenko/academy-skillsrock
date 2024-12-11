import * as React from 'react';
import { Modal ,AppBar, Box, createTheme, IconButton, Input, styled, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from 'react-redux';
import { openCartModal, openModal } from './slices/cardsArray.ts';

export const theme = createTheme({
    palette : {
       primary: {
        main: '#324494',
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

export const StoreAppBar: React.FC = ()=> {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state:any)=>state.arrayCards.isModalOpen);
    const isOpenCart = useSelector(state => state.arrayCards.isModalCartOpen);

    return (
        <>
            < AppBar position="static">
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <IconButton size="large"
                                edge='start'
                                aria-label="menu">
                        <MenuIcon/>        
                    </IconButton>
                    <Typography>
                        Store
                    </Typography>
                    <Button  
                    sx={{margin:'10px'}}
                onClick={()=>dispatch(openModal(!isModalOpen))} 
                variant="contained"
                size='small'
                children='добавить товар'/>
                <Button  
                    sx={{margin:'10px'}}
                onClick={()=>dispatch(openCartModal())} 
                variant="contained"
                size='small'
                children='корзина'/>
                </Toolbar>
            </AppBar>
        </>
    )
} 

export const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 300px;
    box-shadow: 24;
    border-radius: 15px;
  
`;