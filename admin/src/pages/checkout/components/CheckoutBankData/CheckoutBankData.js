import { Typography, Grid, TextField, FormControlLabel } from "@mui/material";
import { CheckBoxCheckout } from "../../StyledComponents";

export const BankCardData = () => {

    return (
        <>      
            <Typography variant="h6"
                        gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
            <TextField  variant="standard"
                        required
                        label='Name on card'
                        fullWidth>
                </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField  variant="standard"
                        required
                        label='Card number'
                        fullWidth>
                    
                </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField  variant="standard"
                        required
                        label='Expiry date'
                        fullWidth>
            </TextField>

            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField  variant="standard"
                        required
                        label='CVV'
                        fullWidth>
                    
                </TextField>
            </Grid>

            <Grid item xs={12}>
            <FormControlLabel control={<CheckBoxCheckout/>}
                              label='Remember credit 
                                     card details
                                     for next time'/>
            </Grid>

            </Grid>
        </>
        
    )
}