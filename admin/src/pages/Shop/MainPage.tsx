import React from 'react';
import { Grid } from "@mui/material";
import { ShopAppBar } from './components/ShopAppBar.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { useSelector } from 'react-redux';
import { getCards } from './slices/sliceShopCards.ts';

export const MainPage = () => {

    const cards = useSelector((state)=>getCards(state));

    return (
    <>
    <ShopAppBar />
        <Grid container spacing={4} wrap='wrap'sx={{margin:'20px', width: '90%'}} >
            {cards.map((elem) => ( <ProductCard key={elem.id} cardObject={elem} /> ))}
        </Grid>
    </>
)}