import * as React from 'react';
import { Card, CardContent, Typography, Button, Grid, Paper } from "@mui/material";
import { BoxCard } from '../Theming.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, delCard, openCartAddModal, openCartModal, openModalWithEditing, selectQuantity } from '../slices/cardsArray.ts';

interface CartProps {
    ID: Date,
    //onEdit: () =>void,
    //onRemove: ()=>void,
}

export const ProductCard: React.FC<CartProps> = ({ID}):JSX.Element => {
    const cardObj = useSelector((state:any)=>state.arrayCards.cards.find((elem)=>elem.id==ID));
    const dispatch = useDispatch();
    return (
        
        <Grid item sx={{width: '20%', height:'500px'}}>
        <Card sx={{ padding:'20px', height: '75%', display:'flex', 
                        flexDirection:'column', 
                        justifyContent: 'space-between'}}>
            <CardContent>
                <Typography variant='h6'>
                    {cardObj.name}
                </Typography>
                <Typography paragraph>
                    {cardObj.description}
                </Typography>
            </CardContent>
            <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center',}}>
            <div style={{display:'flex',flexDirection:'column', textAlign:'start'}}>
                <Typography>
                    <strong>количество:</strong>  {cardObj.quantity}
                </Typography>
                <Typography variant='subtitle1'>
                    <strong>цена:</strong> {cardObj.price}$
                </Typography>
            </div>  
            <Button children='редактировать' size='small' onClick={()=> dispatch(openModalWithEditing(ID))}
            />
            <Button onClick={()=>dispatch(openCartAddModal(ID))} children='add to cart'/>
            <Button 
                    onClick={()=>dispatch(delCard(ID))}
                    size="small"
                    sx={{margin:'10px', maxHeight:'40px',}}
                    variant="contained" 
                    children='Удалить'/>
                    </div>
        </Card>
        </Grid>
    )
} 