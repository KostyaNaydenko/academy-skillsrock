import React from "react";
import { Typography, Grid, ListItem, ListItemText } from "@mui/material";

export const ProductData = () => {
    const orderList = 
    [
        {
            product: 'Product 1',
            quality: 'A nice thing',
            price: '$9.99',
        },
        {
            product: 'Product 2',
            quality: 'Another thing',
            price: '$3.45',
        },
        {
            product: 'Product 3',
            quality: 'Something else',
            price: '$6.51',
        },
        {
            product: 'Product 4',
            quality: 'Best thing of all',
            price: '$14.11',
        },
        {
            product: 'Shipping',
            quality: '',
            price: 'Free',
        },
        {
            product: 'Total',
            quality: '',
            price: '$34.06',
        },
    ]

    return (
        <>      
            <Typography variant="h6"
                        gutterBottom>Order summary</Typography>
            {orderList.map((item)=>(
                                    <ListItem>
                                    <ListItemText
                                      primary={<Typography variant="body1">
                                          {item.product}
                                          </Typography>}
                                      secondary={<Typography variant="body2" color="text.secondary">
                                          {item.quality}
                                          </Typography>}/>
                                    <Typography variant="body2">{item.price}</Typography>
                                  </ListItem>))}
            <Grid container spacing={2}>
              {/* Shipping details */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Shipping
                </Typography>
                <Typography variant="body1" gutterBottom>
                  John Smith
                </Typography>
                <Typography variant="body1" gutterBottom>
                  1 Material-UI Drive, Reactville, Anytown, 99999, USA
                </Typography>
              </Grid>

              {/* Payment details */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Payment details
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>Card type</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>Visa</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>Card holder</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>Mr John Smith</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>Card number</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>xxxx-xxxx-xxxx-1234</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>Expiry date</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>04/2024</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </>
        
    )
}