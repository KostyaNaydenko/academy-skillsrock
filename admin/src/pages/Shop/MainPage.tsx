import React from 'react';
import { ThemeProvider, Grid, } from "@mui/material";
import { theme } from "./Theming.tsx";
import { ShopAppBar } from './components/ShopAppBar.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { useSelector } from 'react-redux';
import { ShopModal } from './components/ShopModal.tsx';
import { useState } from 'react';
import { getCards } from './slices/sliceShopCards.ts';

export const MainPage = () => {

    const cards = useSelector((state)=>getCards(state));
    const [modalValue, setModalValue] = useState(false);
    const [componentName, setComponentName] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);

    const handleAddProductForm = () => { setModalValue(true); setComponentName('AddProductForm') };
    const handleOpenCart = () => { setModalValue(true); setComponentName('Cart') };
    const handleAddToCart = (elem) => { setModalValue(true); setComponentName('CartAddForm'); setSelectedCard(elem) };
    const handleCloseModal = () => { setModalValue(false); setComponentName('') };
    const handleSetSelectedCard = (elem) => setSelectedCard(elem);
    const handleEditingMode = (elem) => { setSelectedCard(elem); setModalValue(true); setComponentName('AddProductForm') }

    return (
    <ThemeProvider theme={theme}>
    <ShopAppBar onToggleAddProductForm = {handleAddProductForm} onToggleOpenCart={handleOpenCart} />
        <ShopModal setSelected={handleSetSelectedCard} selectedCard={selectedCard} modalValue={modalValue} onCloseModal = {handleCloseModal} content = {componentName} />      
        <Grid container spacing={4} wrap='wrap'sx={{margin:'20px', width: '90%'}} >
            {cards.map((elem) => ( <ProductCard key={elem.id} cardObject={elem} modalAddingToCart={handleAddToCart} editingMode={handleEditingMode} /> ))}
        </Grid>
    </ThemeProvider>
)}