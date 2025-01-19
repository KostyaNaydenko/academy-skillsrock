import React, { useState } from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useShopAppBarHandlers } from "../../../hooks/useShopAppBarHandlers.js";
import { CardAddingForm } from "./CardAddingForm.tsx";
import { Cart } from "./Cart.tsx";
import { Search } from "./ Search.tsx";


export const ShopAppBar = () => {

    const [
            handleOpenCardModal,
            handleCloseCardModal,
            handleOpenCart,
            handleCloseCart,
            modalCardValue,
            cartValue ] = useShopAppBarHandlers();

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>

                    <IconButton onClick={handleOpenCardModal} >
                        <PostAddIcon sx= {{color:'#FFF'}}/>
                    </IconButton>

                <Typography>Shop</Typography>

                <IconButton onClick={handleOpenCart} sx= {{color:'#FFF'}}>
                    <ShoppingCartIcon />
                </IconButton >

                <CardAddingForm open={modalCardValue} handleClose={handleCloseCardModal} />
                <Cart isOpen={cartValue} handleClose={handleCloseCart} />

                </Toolbar>
            </AppBar>
        </>
    )
}