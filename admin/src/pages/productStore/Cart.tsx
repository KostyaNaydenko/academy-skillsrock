import * as React from 'react';
import { Card, CardContent, Typography, Button, Grid, Paper } from "@mui/material";
import { BoxCard } from './Theming.tsx';

interface CartProps {
    cartObject: {name: string, description: string, quantity: string, price: string},
    onRemove: ()=>void,
}

export const Cart: React.FC<CartProps> = ({cartObject,onRemove}):JSX.Element => {

    console.log();
    return (
        
        <Grid item sx={{width: '20%', height:'500px'}}>
        <Card sx={{ padding:'20px', height: '75%', display:'flex', 
                        flexDirection:'column', 
                        justifyContent: 'space-between'}}>
            <CardContent>
                <Typography variant='h6'>
                    {cartObject.name}
                </Typography>
                <Typography paragraph>
                    {cartObject.description}
                </Typography>
            </CardContent>
            <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center',}}>
            <div style={{display:'flex',flexDirection:'column', textAlign:'start'}}>
            <Typography>
                <strong>количество:</strong>  {cartObject.quantity}
                </Typography>
            <Typography variant='subtitle1'>
                   <strong>цена:</strong> {cartObject.price}$
                </Typography>
                </div>  
            <Button 
                    onClick={onRemove}
                    size="small"
                    sx={{margin:'10px', maxHeight:'40px',}}
                    variant="contained" 
                    children='Удалить'/>
                    </div>
        </Card>
        </Grid>
    )
} 