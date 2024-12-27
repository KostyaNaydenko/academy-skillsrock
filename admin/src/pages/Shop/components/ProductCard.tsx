import React from 'react';
import { CardContent, Typography, Grid, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { CardAddingForm } from './CardAddingForm.tsx';
import { CartAddingForm } from './CartAddingForm.tsx';
import { useShopCardHandlers } from '../../../hooks/useShopCardHandlers.js';
import { CardButtonsDiv, CardMain, DataDiv, ShopProductCard } from '../Styled.tsx';

export const ProductCard = ({ cardObject }) => {

    const [ 
            handleDelCard, 
            handleOpenAddingToCartModal, 
            handleCloseAddingToCartModal, 
            handleEditing, 
            handleCloseEditing, 
            addingToCartModal, 
            editingMode 
        ] = useShopCardHandlers(cardObject.id);

    return (
        
        <Grid item sx={{width: '20%', height:'500px'}}>
            <ShopProductCard>
                <CardContent>
        
                    <Typography variant='h6'>
                        {cardObject.title}
                    </Typography>

                    <Typography paragraph>
                        {cardObject.description}
                    </Typography>

                </CardContent>

            <CardMain>
            
                <DataDiv>
                    <Typography sx={{marginBottom: '12px'}}>
                        <strong>количество:</strong>   {cardObject.quantity}
                    </Typography>
                    <Typography variant='subtitle1'>
                        <strong>цена:</strong>   {cardObject.price}$
                    </Typography>
                </DataDiv> 

                <CardButtonsDiv>
                    <IconButton onClick={handleEditing}>
                        <EditNoteIcon />
                        
                    </IconButton>

                    <IconButton onClick={handleOpenAddingToCartModal}>
                        <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton onClick={handleDelCard} >
                        <DeleteIcon />
                    </IconButton>

                    <CardAddingForm cardID={cardObject.id} open={editingMode} handleClose={handleCloseEditing} />
                    <CartAddingForm cardID={cardObject.id} open={addingToCartModal} handleClose={handleCloseAddingToCartModal} />
                </CardButtonsDiv>

            </CardMain>
        </ShopProductCard>
        </Grid>
    )
} 
