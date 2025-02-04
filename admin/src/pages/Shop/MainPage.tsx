import { Box, useTheme } from '@mui/material';
import { FilteredProducts, ShopAppBar } from './components';

export const MainPage = () => {
    const theme = useTheme();
    return (
    <Box >
        <ShopAppBar />
        <FilteredProducts />
    </Box>
)}