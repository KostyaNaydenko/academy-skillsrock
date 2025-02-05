import { useDispatch } from "react-redux";
import { CardContent, Typography, IconButton, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { CardAddingForm, AddToCartForm } from '../../components';
import { CardButtonsDiv, CardMain, DataDiv, ShopProductCard } from '../../Shop.styles';
import { delCard, Product } from "../../../../features/shop";
import { useToggle } from "../../../../hooks/useToggle";


interface ProductCardProps {
    cardObject: Product;
}

export const ProductCard = ({ cardObject }: ProductCardProps) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const dispatch = useDispatch();

    const [editingModeValue, setEditingMode] = useToggle();
    const [addingToCartValue, setAddingToCartValue] = useToggle();

    return (
        
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
                    <IconButton onClick={setEditingMode as (()=>void)}>
                        <EditNoteIcon />
                        
                    </IconButton>

                    <IconButton onClick={setAddingToCartValue as (()=>void)}>
                        <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton onClick={()=>dispatch(delCard(cardObject.id))} >
                        <DeleteIcon />
                    </IconButton>

                    <CardAddingForm cardID={cardObject.id} open={editingModeValue as boolean} handleClose={setEditingMode as (()=>void)} />
                    <AddToCartForm cardID={cardObject.id} open={addingToCartValue as boolean} handleClose={setAddingToCartValue as (()=>void)} />
                </CardButtonsDiv>
            </CardMain>
        </ShopProductCard>
    )
} 
