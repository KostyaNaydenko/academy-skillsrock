import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, editCard, getCard } from '../slices/sliceShopCards.ts';
import { CloseButton } from './CloseButton.tsx';

export const CardAddingForm = ({  open, handleClose, cardID = null, }) => {

    const dispatch = useDispatch();
    const card = useSelector(state => getCard(state, cardID));

    const validationSchema = Yup.object({
        title: Yup.string()
            .required()
            .min(2, 'Минимум 2 символа'),
        description: Yup.string()
            .required()
            .min(10, 'Минимум 10 символов'),
        quantity: Yup.number()
            .required()
            .min(1, 'Количество должно быть больше нуля'),
        price: Yup.number()
            .required()
            .min(0, 'Цена не может быть отрицательной'),
    });

    const formik = useFormik({
        initialValues: {
            title: card?.title || '',
            description: card?.description || '',
            quantity: card?.quantity || '',
            price: card?.price || '',
            id: card?.id || Date.now(),
        },
        validationSchema,
        onSubmit: (values) => {
           !card? dispatch(addCard({ ...values, id: Date.now(), })) && formik.resetForm() : dispatch(editCard({ ...values, }));
           handleClose();
        },
    });

    return (

        <Dialog open={open} onClose={handleClose}>
            <CloseButton onClose={handleClose} />
            <DialogTitle>{card ? 'Редактирование товара' : 'Добавление товара'}</DialogTitle>
        <DialogContent>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{marginTop:'10px'}}
                            fullWidth
                            id="title"
                            name="title"
                            label="Название"
                            variant="outlined"
                            {...formik.getFieldProps('title')}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="description"
                            name="description"
                            label="Описание"
                            variant="outlined"
                            multiline
                            rows={4}
                            {...formik.getFieldProps('description')}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="price"
                            name="price"
                            label="Цена"
                            variant="outlined"
                            type="number"
                            {...formik.getFieldProps('price')}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && formik.errors.price}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <DialogActions>
                            <Button type="submit" variant="contained" color="primary">
                                сохранить
                            </Button>
                        </DialogActions>
                    </Grid>
                </Grid>
            </form>
         </DialogContent>
        </Dialog>
    );
};