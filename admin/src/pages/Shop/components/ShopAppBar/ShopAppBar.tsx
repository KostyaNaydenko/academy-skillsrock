import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { useShopAppBarHandlers } from "../../../../hooks/useShopAppBarHandlers";
import { CardAddingForm, Cart } from '../../components';

export const ShopAppBar = () => {

    const theme = useTheme();
    const [
            handleOpenCardModal,
            handleCloseCardModal,
            handleOpenCart,
            handleCloseCart,
            modalCardValue,
            cartValue ] = useShopAppBarHandlers();

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>

                    <IconButton onClick={handleOpenCardModal} >
                        <PostAddIcon sx={{color: theme.palette.secondary.contrastText}}/>
                    </IconButton>

                <Typography fontWeight={430} >Shop</Typography>

                <IconButton onClick={handleOpenCart} sx={{color: theme.palette.secondary.contrastText}}>
                    <ShoppingCartIcon />
                </IconButton >

                <CardAddingForm open={modalCardValue} handleClose={handleCloseCardModal} />
                <Cart isOpen={cartValue} handleClose={handleCloseCart} />

                </Toolbar>
            </AppBar>
        </>
    )
}