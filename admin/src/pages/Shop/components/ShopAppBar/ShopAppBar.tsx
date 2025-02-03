import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, Container, Hidden, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CardAddingForm, Cart } from '../../components';
import { useToggle } from '../../../../hooks/useToggle';
import { ShopToolBar } from '../../Shop.styles';

export const ShopAppBar = () => {
    
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down('md'))

    const [cardModalValue, setCardModalValue] = useToggle();
    const [cartModalValue, setCartModalValue] = useToggle();

    return (
        <>
            <AppBar sx={{position: 'absolute', zIndex: 0, display:'flex', flexGrow:1}}>
                <ShopToolBar>

                    <IconButton onClick={setCardModalValue as (() => void)} >
                        <PostAddIcon sx={{color: theme.palette.secondary.contrastText}}/>
                    </IconButton>

                <Hidden mdDown>
                <Typography fontWeight={430} >Shop</Typography>
                </Hidden>
                <IconButton onClick={setCartModalValue as (() => void)} sx={{color: theme.palette.secondary.contrastText}}>
                    <ShoppingCartIcon />
                </IconButton >

                <CardAddingForm open={cardModalValue as boolean} handleClose={setCardModalValue as (() => void)} />
                <Cart isOpen={cartModalValue as boolean} handleClose={setCartModalValue as (() => void)} />

                </ShopToolBar>
            </AppBar>
        </>
    )
}