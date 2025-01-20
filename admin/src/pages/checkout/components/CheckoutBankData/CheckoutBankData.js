import { Typography, Grid, TextField, FormControlLabel } from "@mui/material";
import { CheckBoxCheckout } from "../../Checkout.styles";
import { BANK_DATA_FIELDS } from "../../constants/constants";

export const BankCardData = () => {

    return (
        <>      
            <Typography variant="h6"
                        gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>

            { BANK_DATA_FIELDS.map(elem =>(
                <>
                    <Grid   key={elem}
                            item xs={12} 
                            sm={6}>
                        <TextField  variant="standard"
                                    required
                                    label={elem}
                                    fullWidth>
                        </TextField>
                    </Grid>
                </>
            ))}

            <Grid item xs={12}>
            <FormControlLabel   control={<CheckBoxCheckout/>}
                                label='Remember credit card details for next time'/>
            </Grid>

            </Grid>
        </>
        
    )
}