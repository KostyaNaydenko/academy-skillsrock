import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCard, editCard } from '../slices/sliceShopCards.ts';

export const CardAddingForm = ({onCloseModal, selectedCard, setSelected}) => {
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        title: Yup.string()
            .required('Обязательное поле')
            .min(2, 'Минимум 2 символа'),
        description: Yup.string()
            .required('Обязательное поле')
            .min(10, 'Минимум 10 символов'),
        quantity: Yup.number()
            .required('Обязательное поле')
            .min(1, 'Количество должно быть больше нуля'),
        price: Yup.number()
            .required('Обязательное поле')
            .min(0, 'Цена не может быть отрицательной'),
    });

    const formik = useFormik({
        initialValues: !selectedCard? {
            title: '',
            description: '',
            quantity: '',
            price: '',
            id: Date.now(),
        } : {
            title: selectedCard.title,
            description: selectedCard.description,
            quantity: selectedCard.quantity,
            price: selectedCard.price,
            id: selectedCard.id,    
        },
        validationSchema,
        onSubmit: (values) => {
           !selectedCard? dispatch(addCard({ ...values, })): dispatch(editCard({ ...values, }));
            setSelected(null);
            onCloseModal();
        },
    });

    return (
        <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
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
            <Button type="submit" variant="contained" color="primary">
              сохранить
            </Button>
          </Grid>
                </Grid>
            </form>
        </Container>
    );
};