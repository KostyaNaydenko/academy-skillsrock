import { useEffect, useState } from "react";
import { Typography, IconButton, Button, Modal, Checkbox, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteInCart, clearCart, getCart, Product } from "../../slices";
import { CloseButton } from "../CloseButton";
import { BoxCart, CartPaper } from "../../Shop.styles";
import DeleteIcon from '@mui/icons-material/Delete';

interface CartProps {
    isOpen: boolean;
    handleClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, handleClose }) => {
    
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleCloseClearCartDialog = () => setOpen(false);
    const handleClearCart = () => { dispatch(clearCart()); handleCloseClearCartDialog()  };

    const cart = useSelector(state => getCart(state));  
    const dispatch = useDispatch();

    useEffect(() => {
                setTotalQuantity(cart.reduce((acc: number, cardObject: Product)=> acc + cardObject.quantity, 0)); 
                setTotalPrice(cart.reduce((acc: number, cardObject: Product)=> acc + cardObject.price*cardObject.quantity, 0));
                },[cart]);

    return (
        <Modal open={isOpen}>
            <BoxCart sx={{bgcolor: 'background.paper', p:4,}} >
                <CloseButton onClose={handleClose} />
                { cart.length>0 ?     
                    <>
                        <Typography variant="h6" sx={{marginBottom: '20px'}}> Cart </Typography>
                            { cart.map((elem: Product)=>(
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