import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { useShopAppBarHandlers } from "../../../../hooks/useShopAppBarHandlers";
import { CardAddingForm, Cart } from '../../components';
import { useToggle } from '../../../../hooks/useToggle';

export const ShopAppBar = () => {

    const theme = useTheme();

    const [cardModalValue, setCardModalValue] = useToggle();
    const [cartModalValue, setCartModalValue] = useToggle();

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>

                    <IconButton onClick={setCardModalValue as (() => void)} >
                        <PostAddIcon sx={{color: theme.palette.secondary.contrastText}}/>
                    </IconButton>

                <Typography fontWeight={430} >Shop</Typography>

                <IconButton onClick={setCartModalValue as (() => void)} sx={{color: theme.palette.secondary.contrastText}}>
                    <ShoppingCartIcon />
                </IconButton >

                <CardAddingForm open={cardModalValue as boolean} handleClose={setCardModalValue as (() => void)} />
                <Cart isOpen={cartModalValue as boolean} handleClose={setCartModalValue as (() => void)} />

                </Toolbar>
            </AppBar>
        </>
    )
}