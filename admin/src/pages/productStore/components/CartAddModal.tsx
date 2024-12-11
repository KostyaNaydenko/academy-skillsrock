import React from "react";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { ModalBox } from "../Theming.tsx";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { addToCart, setCartElem, setCartTotal, setQuantityToCart, setTotalQuantity } from "../slices/cardsArray.ts";

export const Cart: React.FC = () => {
    const isOpenAddModal = useSelector(state => state.arrayCards.isModalCartAdd);
    const isOpenCart = useSelector(state => state.arrayCards.isModalCartOpen);
    const quantity = useSelector((state) => state.arrayCards.totalQuantity);
    const cart = useSelector(state => state.arrayCards.cart);
    const dispatch = useDispatch();
    
    return (
        <>
        <Modal open={isOpenAddModal}>
            <ModalBox>
                <TextField type="number"
                           label='Введите количество'
                           onChange={(e)=>dispatch(setQuantityToCart(e.target.value))}></TextField>
            <Button onClick={()=>{dispatch(addToCart())}} children='добавить'/>
            </ModalBox>
        </Modal>
        
        <Modal open={isOpenCart}>
        <ModalBox>
            {cart.map(elem=>(
                <Typography key={elem.id}>{elem.name}</Typography>
            ))}
        </ModalBox>
    </Modal>
    </>
)}