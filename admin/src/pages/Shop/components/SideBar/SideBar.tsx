import {
    Box,
    Typography,
    TextField,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Grid,
} from '@mui/material';
import { FilterPanelBox } from '../../Shop.styles';

interface SideBarProps {
    minPrice: number | null;
    maxPrice: number | null;
    stockStatus: 'inStock' | 'outOfStock' | null;
    handleMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleStockStatusChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleResetFilters: () => void;

}

export const SideBar = ({
    minPrice,
    maxPrice,
    stockStatus,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleStockStatusChange,
    handleResetFilters
}: SideBarProps) => {

    return (
        <>
                <FilterPanelBox>
                    <Typography variant="h6" gutterBottom>
                        Filters
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Price</Typography>
                        <Grid container spacing={2} alignItems="center" >
                            <Grid item xs={6}>
                                <TextField
                                    label="Min price"
                                    type="number"
                                    size="small"
                                    value={minPrice || ''}
                                    onChange={handleMinPriceChange}
                                    sx={{width: '100%'}} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Max price"
                                    type="number"
                                    size="small"
                                    value={maxPrice || ''}
                                    onChange={handleMaxPriceChange}
                                    sx={{width: '100%'}}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="stock-status"
                                name="stock-status"
                                value={stockStatus}
                                onChange={handleStockStatusChange}>
                                <FormControlLabel
                                    value="inStock"
                                    control={<Radio />}
                                    label="available"/>
                                <FormControlLabel
                                    value="outOfStock"
                                    control={<Radio />}
                                    label="Not available"/>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Button variant="contained" color="primary" onClick={handleResetFilters}>
                        Subtract filters
                    </Button>
                </FilterPanelBox>
        </>
    );
};