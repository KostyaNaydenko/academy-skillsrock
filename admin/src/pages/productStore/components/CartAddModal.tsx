import React from "react";
import { Button, Modal, TextField, Typography, IconButton, Box, Paper } from "@mui/material";
import { ModalBox, ModalBoxCart } from "../Theming.tsx";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { addToCart, setQuantityToCart, deleteInCart, clearCart } from "../slices/cardsArray.ts";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

export const Cart: React.FC = () => {
    const isOpenAddModal = useSelector(state => state.arrayCards.isModalCartAdd);
    const isOpenCart = useSelector(state => state.arrayCards.isModalCartOpen);
    const price = useSelector((state) => state.arrayCards.totalPrice);
    const cart = useSelector(state => state.arrayCards.cart);
    const dispatch = useDispatch();
    const columns = [
                    { field: 'name', headerName: 'Название', width: 130 },
                    { field: 'quantity', headerName: 'Количество',type: 'number', width: 130 },
                    { field: 'price', headerName: 'Цена', type: 'number', width: 90,},
    ]

    return (
        <>
                <div style={{display: 'flex'}}>
                <TextField size="small" 
                           type="number"
                           label='Введите количество'
                           onChange={(e)=>dispatch(setQuantityToCart(e.target.value))} />

                <IconButton onClick={()=>{dispatch(addToCart())}} 
                            sx={{marginLeft:'10px'}}>
                    <CheckIcon/>
                </IconButton>
                </div>
        
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px',}}>
                    <Typography variant="h6" sx={{marginLeft: '8px', marginTop:'2px'}} children= 'корзина'/>
                    <IconButton onClick={()=> dispatch(closeModal())}>
                        <CloseIcon />
                    </IconButton>
                </div>
            {cart.map((elem)=>(
                <>
                <Paper sx={{minWidth:'500px', margin: '10px', display: 'flex', justifyContent:'space-around', alignItems:'center' }}>
                    <Typography variant='body1' fontWeight='bold' children={elem.name}/>
                    <Typography variant="body2" children={elem.quantity+' шт'}/>
                    <Typography variant="body2" children={elem.price+'$'}/>
                    <IconButton  sx={{color: 'red'}} onClick={()=>{dispatch(deleteInCart(elem.id))}}>
                        <DeleteIcon/>
                    </IconButton>
                </Paper>
                </>
            ))}
            
            <div style={{display:'flex', justifyContent:'space-between', margin:'10px'}}>
            <Typography variant="h6" 
                        sx={{marginTop:'15px',}}>
                        цена: {price}$
                        </Typography>
            <Button onClick={()=>{dispatch(clearCart())}} children='очистить'/>
            </div>
    </>
)}