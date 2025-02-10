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
    formikValues: any;
    handleChange: any;
    handleReset: any;
}

export const SideBar = ({ formikValues, handleChange, handleReset }: SideBarProps) => {

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
                                    name='minPrice'
                                    value={formikValues.minPrice}
                                    onChange={handleChange}
                                    sx={{width: '100%'}} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Max price"
                                    type="number"
                                    size="small"
                                    name='maxPrice'
                                    value={formikValues.maxPrice}
                                    onChange={handleChange}
                                    sx={{width: '100%'}}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="stock-status"
                                name="stockStatus"
                                value={formikValues.stockStatus}
                                onChange={handleChange}>
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
                    <Button variant="contained" color="primary" onClick={handleReset}>
                        Subtract filters
                    </Button>
                </FilterPanelBox>
        </>
    );
};