import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Typography, IconButton, Button, Modal, Checkbox, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteInCart, clearCart } from "../slices/sliceCart.ts";
import { getCart } from "../slices/sliceCart.ts";
import { CloseButton } from "./CloseButton.tsx";
import { BoxCart, CartPaper } from "../Styled.tsx";
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = ({ isOpen, handleClose }) => {
    
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [open, setOpen] = React.useState(false);

    const cart = useSelector(state => getCart(state));  
    const dispatch = useDispatch();

    useEffect(() => {
                setTotalQuantity(cart.reduce((acc, currentValue)=> acc + currentValue.quantity  ,0)); 
                setTotalPrice(cart.reduce((acc, currentValue)=> acc + currentValue.price*currentValue.quantity, 0));
                },[cart]);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleCloseClearCartDialog = () => setOpen(false);
    const handleClearCart = () => {dispatch(clearCart()); handleCloseClearCartDialog()};

    return (
        <Modal open={isOpen}>
            <BoxCart sx={{bgcolor: 'background.paper', p:4,}} >
                <CloseButton onClose={handleClose} />
                { cart.length>0 ?     
                    <>
                        <Typography variant="h6" sx={{marginBottom: '20px'}}> Cart </Typography>
                            { cart.map((elem)=>(
                                <CartPaper sx={{height:'300px'}} >
                                    <Checkbox />
                                    <Typography variant='body1' fontWeight='bold' children={elem.title}/>
                                    <Typography variant="body2" children={elem.quantity+' шт'}/>
                                    <Typography variant="body2" children={elem.price+'$'}/>
                                    <IconButton sx={{color: 'red'}} onClick={()=>{dispatch(deleteInCart(elem.id))}}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </CartPaper>
                            ))}
                        <Typography fontSize={20} marginLeft={2} >Total quantity:{` ${totalQuantity}`}</Typography>
                        <Typography fontSize={20} marginLeft={2} >Total price: <strong>{` ${totalPrice}$`}</strong></Typography>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button onClick={handleClickOpen} size="small" children='clear' sx={{margin: '10px'}} />
                            <Button children='pay' variant="contained" size="small" sx={{margin: '10px'}} />
                        </div>
                        <Dialog
                            open={open}
                            onClose={handleCloseClearCartDialog}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">
                            {"Empty your cart?"}
                            </DialogTitle>
                            <DialogActions>
                            <Button onClick={handleCloseClearCartDialog}>No</Button>
                            <Button onClick={handleClearCart} autoFocus>
                                Yes
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </>
                    : <Typography variant="h6" >cart is empty</Typography>}
            </BoxCart>
        </Modal>
)}