import React from "react";
import { CardContent, Typography, Grid, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { CartAddingForm, CardAddingForm } from '../../components';
import {useShopCardHandlers} from '../../../../hooks/useShopCardHandlers';
import { CardButtonsDiv, CardMain, DataDiv, ShopProductCard } from '../../Shop.styles';
import { Product } from "../../slices";

interface ProductCardProps {
    cardObject: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ cardObject }) => {

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
                    <Tooltip title={cardObject.title}>
                    <Typography variant='h6'
                                overflow = 'hidden'
                                textOverflow = 'ellipsis'
                                whiteSpace = 'nowrap'>
                        {cardObject.title}
                    </Typography>
                    </Tooltip>

                    <Tooltip title={cardObject.description}>
                    <Typography paragraph
                                overflow = 'hidden'
                                textOverflow = 'ellipsis'
                                whiteSpace = 'nowrap'>
                        {cardObject.description}
                    </Typography>
                    </Tooltip>
                </CardContent>

            <CardMain>
                <DataDiv>
                    <Typography sx={{marginBottom: '12px'}}
                                overflow = 'hidden'
                                textOverflow = 'ellipsis'
                                whiteSpace = 'nowrap'>
                        <strong>quantity:</strong>   {cardObject.quantity}
                    </Typography>

                    <Typography variant='subtitle1'
                                overflow = 'hidden'
                                textOverflow = 'ellipsis'
                                whiteSpace = 'nowrap'>
                        <strong style={{fontSize:'23px'}}>{cardObject.price}$</strong> 
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
