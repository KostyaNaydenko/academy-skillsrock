import * as React from 'react';
import { Modal ,AppBar, Box, createTheme, IconButton, Input, styled, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCartModal, openModal } from './slices/cardsArray.ts';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

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

export const StoreAppBar = ({onToggleModal, onCloseModal}) => {


    return (
        <>
            < AppBar position="static">
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <IconButton onClick={onToggleModal} >
                        <PostAddIcon sx= {{color:'#FFF'}}/>    
                    </IconButton>

                <Typography>
                    Store
                </Typography>

                <IconButton onClick={onToggleModal} sx= {{color:'#FFF'}}>
                    <ShoppingCartIcon />
                </IconButton >  
                    
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