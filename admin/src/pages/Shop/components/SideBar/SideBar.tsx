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
    formik: any;
}

export const SideBar = ({ formik }: SideBarProps) => {

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
                                value={formik.values.minPrice}
                                onChange={formik.handleChange}
                                sx={{width: '100%'}} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Max price"
                                    type="number"
                                    size="small"
                                    name='maxPrice'
                                    value={formik.values.maxPrice}
                                    onChange={formik.handleChange}
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
                                value={formik.values.stockStatus}
                                onChange={formik.handleChange}>
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
                <Button variant="contained" color="primary" onClick={formik.handleReset}>
                    Subtract filters
                </Button>
            </FilterPanelBox>
        </>
    );
};