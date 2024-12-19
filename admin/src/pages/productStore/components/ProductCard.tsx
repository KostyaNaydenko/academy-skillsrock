import * as React from 'react';
import { Card, CardContent, Typography, Button, Grid, Paper, IconButton } from "@mui/material";
import { BoxCard } from '../Theming.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { delCard } from '../slices/cardsArray.ts';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditNoteIcon from '@mui/icons-material/EditNote';

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
                    {cardObj.title}
                </Typography>
                <Typography paragraph>
                    {cardObj.description}
                </Typography>
            </CardContent>
            <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column'}}>
            
                <div style={{display:'flex',flexDirection:'column', textAlign:'start', width:'100%',}}>
                    <Typography sx={{marginBottom: '12px'}}>
                        <strong>количество:</strong>   {cardObj.quantity}
                    </Typography>
                    <Typography variant='subtitle1'>
                        <strong>цена:</strong>   {cardObj.price}$
                    </Typography>
                </div> 

                <div style={{display: 'flex' ,width: '100%', justifyContent: 'space-around', marginTop:'20px'}}>
                    <IconButton onClick={()=> dispatch(openModalWithEditing(ID))} >
                        <EditNoteIcon />
                    </IconButton>

                    <IconButton onClick={()=>dispatch(openCartAddModal(ID))} >
                        <AddShoppingCartIcon />
                    </IconButton>

                    <IconButton onClick={()=>dispatch(delCard(ID))} >
                        <DeleteIcon />
                    </IconButton>
                </div>

            </div>

        </Card>
        </Grid>
    )
} 