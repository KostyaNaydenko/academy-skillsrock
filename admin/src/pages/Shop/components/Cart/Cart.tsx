import { useState } from "react";
import { Typography, IconButton, Button, Checkbox, Dialog, DialogTitle, DialogActions, useTheme, DialogContent, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteInCart, clearCart, getCart, Product, getTotalPrice, getTotalQuantity } from "../../../../features/shop";
import { CartPaper, CloseButtonDiv } from "../../Shop.styles";
import DeleteIcon from '@mui/icons-material/Delete';
import { AppState } from "../../../../app/store";
import CloseIcon from '@mui/icons-material/Close';
import { RemoveModal } from "../RemoveModal";

interface CartProps {
    isOpen: boolean;
    handleClose: () => void;
}

export const Cart = ({ isOpen, handleClose }: CartProps) => {

    const theme = useTheme();

    const dispatch = useDispatch();

    const cart = useSelector((state: AppState) => getCart(state));
    const totalP = useSelector(getTotalPrice);
    const totalQ = useSelector(getTotalQuantity);

    const [open, setOpen] = useState(false);

    const handleClearCart = () => { dispatch(clearCart()); setOpen(false)  };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <CloseButtonDiv>
                <IconButton sx={{margin:'10px'}} onClick={handleClose} >
                    <CloseIcon />
                </IconButton>
            </CloseButtonDiv>
                <DialogTitle sx={{marginTop: '0'}}>
                    <Typography variant="h6" sx={{marginBottom: '20px',}}>{ cart.length>0? 'Cart': 'Cart is empty' }</Typography>
                </DialogTitle>
            <DialogContent>   
                { cart.length>0 && cart.map((product: Product)=>(
                    <CartPaper key={product.id} >
                        <Checkbox />
                        <Typography variant='body1' fontWeight='bold' children={product.title}/>
                        <Typography variant="body2" children={product.quantity+' шт'}/>
                        <Typography variant="body2" children={product.price+'$'}/>
                        <IconButton sx={{color: 'red'}} onClick={()=>{dispatch(deleteInCart(product.id))}}>
                            <DeleteIcon/>
                        </IconButton>
                    </CartPaper>
                ))}
                {cart.length>0 && 
                    <>
                        <Typography fontSize={20} marginLeft={2} >Total quantity:{` ${totalQ}`}</Typography>
                        <Typography fontSize={20} marginLeft={2} >Total price: <strong>{` ${totalP}$`}</strong></Typography>
                    </>}
                <DialogActions>
                    {cart.length>0 && 
                        <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button children='clear' onClick={()=>setOpen(true)} size="small" color="primary" sx={{margin: '10px'}} />
                            <Button children='pay' variant="contained" color="success" size="small" sx={{margin: '10px', color: theme.palette.secondary.contrastText}} />
                        </Box>}
                </DialogActions>
                    <RemoveModal open={open} onClose={()=>setOpen(false)} title="Empty your cart?" actions={handleClearCart}  />
            </DialogContent>
        </Dialog>
)}