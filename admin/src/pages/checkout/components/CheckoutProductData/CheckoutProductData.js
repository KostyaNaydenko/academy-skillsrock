import { Typography, Grid, ListItem, ListItemText } from "@mui/material";
import { ORDER_LIST } from "../../constants/constants";

export const ProductData = () => 
      (
        <>      
            <Typography variant="h6"
                        gutterBottom>Order summary</Typography>
            {ORDER_LIST.map((order)=>(
                                    <ListItem key={order.id}>
                                    <ListItemText
                                      primary={<Typography variant="body1">
                                          {order.product}
                                          </Typography>}
                                      secondary={<Typography variant="body2" color="text.secondary">
                                          {order.quality}
                                          </Typography>}/>
                                    <Typography variant="body2">{order.price}</Typography>
                                  </ListItem>))}

            <Grid container spacing={2}>
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