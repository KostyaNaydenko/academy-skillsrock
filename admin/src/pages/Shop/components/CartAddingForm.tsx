import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/sliceCart.ts';
import {Dialog, DialogTitle, DialogActions} from '@mui/material';
import { CloseButton } from './CloseButton.tsx';
import { getCard } from '../slices/sliceShopCards.ts';


export const CartAddingForm = ({ cardID = null, open, handleClose }) => {
    const dispatch = useDispatch();
    const card = useSelector(state => getCard(state, cardID));

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const handlePlusTotalQuantity = (quantity) => { setTotalQuantity(totalQuantity+quantity) };
    const handlePlusTotalPrice = (price) => { setTotalPrice(totalPrice+price) };

    const validationSchema = Yup.object({
        quantity: Yup.number()
            .required()
            .min(1),
    });

    const formik = useFormik({
        initialValues: { quantity: '' },
        validationSchema,
        onSubmit: (values) => {
            dispatch(addToCart({...card, quantity: values.quantity}));
            handlePlusTotalQuantity(values.quantity);
            handlePlusTotalPrice(card.price);
            handleClose();
        },
    });

    return (

        <Dialog open={open} onClose={handleClose} >
            <CloseButton onClose={handleClose} />
            <DialogTitle>Set quantity</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{margin:'10px'}}
                                fullWidth
                                id="quantity"
                                name="quantity"
                                label="Quantity"
                                variant="outlined"
                                type="number"
                                {...formik.getFieldProps('quantity')}
                                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                                helperText={formik.touched.quantity && formik.errors.quantity}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DialogActions>
                                <Button type="submit" variant="contained" color="primary">
                                    add
                                </Button>
                            </DialogActions>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
};