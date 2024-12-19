import * as React from 'react';
import { ThemeProvider, Grid, } from "@mui/material";
import { StoreAppBar, theme } from "./Theming.tsx";
import { ProductCard } from './components/ProductCard.tsx';
import { useSelector } from 'react-redux';
import { ProductForm } from './components/ProductAddModal.tsx';
import { Cart } from './components/CartAddModal.tsx';
import { useState } from 'react';
import MyForm from './components/TestForm.tsx';

const ProductStore: React.FC = () => {

    const cards = useSelector((state:any)=>state.arrayCards.cards);
    const [modalValue, setModalValue] = useState(false);
    const openModal = ()=>setModalValue(true);
    const closeModal = ()=>setModalValue(false);

    return (
    <ThemeProvider theme={theme}>
    <StoreAppBar onToggleModal = {openModal} onCloseModal={closeModal}/>
        <ProductForm modalValue={modalValue} onCloseModal = {closeModal}/>
        <Cart/>       
        <Grid container 
              spacing={4} 
              wrap='wrap'
              sx={{margin:'20px', width: '90%'}} >
            {cards.map((elem) => ( <ProductCard key={elem.id} ID={elem.id}/> ))}
        </Grid>
        
    </ThemeProvider>
)}

export default ProductStore;