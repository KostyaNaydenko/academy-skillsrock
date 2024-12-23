import React from "react";
import { Typography, IconButton, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteInCart } from "../slices/sliceCart.ts";
import DeleteIcon from '@mui/icons-material/Delete';
import { getCart } from "../slices/sliceCart.ts";

export const Cart = () => {
    
    const cart = useSelector(state => getCart(state));
    const dispatch = useDispatch();

    return (
        <>
            {cart.map((elem)=>(
                <>
                <Paper key={elem.id} sx={{minWidth:'500px', margin: '10px', display: 'flex', justifyContent:'space-around', alignItems:'center' }}>
                    <Typography variant='body1' fontWeight='bold' children={elem.title}/>
                    <Typography variant="body2" children={elem.quantity+' шт'}/>
                    <Typography variant="body2" children={elem.price+'$'}/>
                    <IconButton sx={{color: 'red'}} onClick={()=>{dispatch(deleteInCart(elem))}}>
                        <DeleteIcon/>
                    </IconButton>
                </Paper>
                </>
            ))}
    </>
)}