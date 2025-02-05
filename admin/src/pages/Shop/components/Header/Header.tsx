import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Hidden, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CardAddingForm, Cart } from '..';
import { useToggle } from '../../../../hooks/useToggle';
import { SearchInput, ShopToolBar } from '../../Shop.styles';
import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export const Header = ( { search, setSearch }: HeaderProps ) => {
    
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

                    <SearchInput
                        placeholder="Search product..."
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        value={search} />

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