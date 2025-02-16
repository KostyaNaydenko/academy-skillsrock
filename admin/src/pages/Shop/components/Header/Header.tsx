import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, IconButton, useTheme } from "@mui/material";
import { CardAddingForm, Cart } from '..';
import { useToggle } from '../../../../hooks/useToggle';
import { SearchInput, ShopToolBar } from '../../Shop.styles';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
    formik: any;
}

export const Header = ( { formik }: HeaderProps ) => {
    
    const { t, i18n } = useTranslation(['translation']);
    const changeLanguage = (language: string) => i18n.changeLanguage(language);

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
                    placeholder={t("search")}
                    onChange={(e)=>formik.setFieldValue('searchTerm',e.target.value)}
                    value={formik.values.searchTerm} />

                <Box sx={{display: 'flex'}} >
                    <Box sx={{margin: '5px'}} >
                        <Button onClick={()=>changeLanguage('en')} variant='contained' size='small' >
                            en
                        </Button>
                        <Button onClick={()=>changeLanguage('ru')} variant='contained' size='small' >
                            ru
                        </Button>
                    </Box>

                    <IconButton onClick={setCartModalValue as (() => void)} sx={{color: theme.palette.secondary.contrastText}}>
                        <ShoppingCartIcon />
                    </IconButton >
                </Box>

                <CardAddingForm open={cardModalValue as boolean} handleClose={setCardModalValue as (() => void)} />
                <Cart isOpen={cartModalValue as boolean} handleClose={setCartModalValue as (() => void)} />

              </ShopToolBar>
            </>
    )
}