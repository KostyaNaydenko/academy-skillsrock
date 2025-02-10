import { Dispatch, SetStateAction } from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { CardAddingForm, Cart } from '..';
import { useToggle } from '../../../../hooks/useToggle';
import { SearchInput, ShopToolBar } from '../../Shop.styles';


interface HeaderProps {
    formik: any;
}

export const Header = ( { formik }: HeaderProps ) => {
    
    const theme = useTheme();

    const [cardModalValue, setCardModalValue] = useToggle();
    const [cartModalValue, setCartModalValue] = useToggle();

    return (
            <>
                <ShopToolBar>

                    <IconButton onClick={setCardModalValue as (() => void)} >
                        <PostAddIcon sx={{color: theme.palette.secondary.contrastText}}/>
                    </IconButton>

                    <SearchInput
                        placeholder="Search product..."
                        onChange={(e)=>formik.setFieldValue('searchTerm',e.target.value)}
                        value={formik.values.searchTerm} />

                    <IconButton onClick={setCartModalValue as (() => void)} sx={{color: theme.palette.secondary.contrastText}}>
                        <ShoppingCartIcon />
                    </IconButton >

                    <CardAddingForm open={cardModalValue as boolean} handleClose={setCardModalValue as (() => void)} />
                    <Cart isOpen={cartModalValue as boolean} handleClose={setCartModalValue as (() => void)} />

                </ShopToolBar>
            </>
    )
}