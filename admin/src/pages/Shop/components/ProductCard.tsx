import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { useDispatch } from 'react-redux';
import { delCard } from '../slices/sliceShopCards.ts';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditNoteIcon from '@mui/icons-material/EditNote';


export const ProductCard = ({ cardObject, modalAddingToCart, editingMode }) => {

    const dispatch = useDispatch();
    return (
        
        <Grid item sx={{width: '20%', height:'500px'}}>
        <Card sx={{ padding:'20px', height: '75%', display:'flex', 
                        flexDirection:'column', 
                        justifyContent: 'space-between'}}>
            <CardContent>
                <Typography variant='h6'>
                    {cardObject.title}
                </Typography>
                <Typography paragraph>
                    {cardObject.description}
                </Typography>
            </CardContent>
            <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column'}}>
            
                <div style={{display:'flex',flexDirection:'column', textAlign:'start', width:'100%',}}>
                    <Typography sx={{marginBottom: '12px'}}>
                        <strong>количество:</strong>   {cardObject.quantity}
                    </Typography>
                    <Typography variant='subtitle1'>
                        <strong>цена:</strong>   {cardObject.price}$
                    </Typography>
                </div> 

                <div style={{display: 'flex' ,width: '100%', justifyContent: 'space-around', marginTop:'20px'}}>
                    <IconButton onClick={()=>editingMode(cardObject)} >
                        <EditNoteIcon />
                    </IconButton>

                    <IconButton onClick={()=>modalAddingToCart(cardObject)}>
                        <AddShoppingCartIcon />
                    </IconButton>

                    <IconButton onClick={()=>dispatch(delCard(cardObject.id))} >
                        <DeleteIcon />
                    </IconButton>
                </div>

            </div>

        </Card>
        </Grid>
    )
} 
