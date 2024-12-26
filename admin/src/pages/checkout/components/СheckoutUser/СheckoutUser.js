import { Typography, Grid, TextField, FormControlLabel } from "@mui/material";
import { CheckBoxCheckout } from "../../StyledComponents";


export const UserData = () => {

    return (
        <>      
            <Typography variant="h6"
                        gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
                <TextField  fullWidth
                            variant="standard"
                            required
                            label='First name'

                            >
                    
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField      fullWidth
                            variant="standard"
                            required
                            label='Last name'>
                    
                </TextField>
            </Grid>
            <Grid item xs={12}>
            <TextField  variant="standard"
                        required
                        label='Address line 1'
                        fullWidth>
                        
                </TextField>
            </Grid>
            <Grid item xs={12}>
            <TextField  variant="standard"
                        required
                        label='Address line 2'
                        fullWidth>
                    
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField  variant="standard"
                        required
                        label='City'
                        fullWidth>
                    
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField  variant="standard"
                        required
                        label='State/Province/Region'
                        fullWidth>
                    
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField  variant="standard"
                        required
                        label='Zip /Postal code'
                        fullWidth>
                    
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField  variant="standard"
                        required
                        label='Country'
                        fullWidth>
                    
                </TextField>
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
            
      control={<CheckBoxCheckout />}
      label="Use this address for payment details"/>
            </Grid>
            </Grid>
        </>
        
    )
}