import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const ShopAppBar = ({onToggleAddProductForm, onToggleOpenCart }) => {

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <IconButton onClick={onToggleAddProductForm} >
                        <PostAddIcon sx= {{color:'#FFF'}}/>    
                    </IconButton>

                <Typography>Shop</Typography>

                <IconButton onClick={onToggleOpenCart} sx= {{color:'#FFF'}}>
                    <ShoppingCartIcon />
                </IconButton >  
                    
                </Toolbar>
            </AppBar>
        </>
    )
} 