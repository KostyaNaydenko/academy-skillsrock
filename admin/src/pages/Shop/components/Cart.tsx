import React from "react";
import { Typography, IconButton, Button, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteInCart, clearCart } from "../slices/sliceCart.ts";
import { getCart } from "../slices/sliceCart.ts";
import { CloseButton } from "./CloseButton.tsx";
import { BoxCart, CartPaper } from "../Styled.tsx";
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = ({ isOpen, handleClose }) => {
    
    const cart = useSelector(state => getCart(state));
    const dispatch = useDispatch();

    return (
        <Modal open={isOpen}>
            <BoxCart sx={{bgcolor: 'background.paper', p:4,}} >
                <CloseButton onClose={handleClose} />

                { cart.length>0?     
                <>
                <Typography variant="h6" sx={{marginBottom: '20px'}}> Корзина </Typography>
                {cart.map((elem)=>(
                    <CartPaper>
                        <Typography variant='body1' fontWeight='bold' children={elem.title}/>
                        <Typography variant="body2" children={elem.quantity+' шт'}/>
                        <Typography variant="body2" children={elem.price+'$'}/>

                        <IconButton sx={{color: 'red'}} onClick={()=>{dispatch(deleteInCart(elem))}}>
                            <DeleteIcon/>
                        </IconButton>
                    </CartPaper>
                ))}

                <Button onClick={()=>dispatch(clearCart())} sx={{marginTop: '10px'}} children='очистить'/>
                </>
                : <Typography variant="h6" >корзина пуста</Typography>}
            </BoxCart>
        </Modal>
)}