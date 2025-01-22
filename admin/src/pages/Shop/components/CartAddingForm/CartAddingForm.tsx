import * as Yup from 'yup';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Grid, DialogContent, Dialog, DialogTitle, DialogActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CloseButton } from '../CloseButton';
import { getCard, addToCart } from '../../slices';


interface CartProps {
    cardID: number | null;
    open: boolean;
    handleClose: () => void;
}

export const CartAddingForm: React.FC<CartProps> = ({ cardID = null, open, handleClose }) => {

    const dispatch = useDispatch();
    const card = useSelector(state => getCard(state, cardID as number));

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
                                title="quantity"
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