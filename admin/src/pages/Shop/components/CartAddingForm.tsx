import React from 'react';
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

    const validationSchema = Yup.object({
        quantity: Yup.number()
            .required('Обязательное поле')
            .min(1, 'Количество должно быть больше нуля'),
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
            <DialogTitle>Выберите количество</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{margin:'10px'}}
                                fullWidth
                                id="quantity"
                                name="quantity"
                                label="Количество"
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
                                    добавить
                                </Button>
                            </DialogActions>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
};