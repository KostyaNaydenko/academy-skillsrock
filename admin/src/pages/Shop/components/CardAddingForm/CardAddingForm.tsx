import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, editCard, getCard } from '../../slices';
import { CloseButton } from '../CloseButton';
import React from 'react';

interface CardAddingFormProps {
    open: boolean;
    handleClose: () => void;
    cardID?: number | null;
}

interface FormValues {
    title: string;
    description: string;
    quantity: number;
    price: number;
    id: string | number;
}

export const CardAddingForm: React.FC<CardAddingFormProps> = ({  open, handleClose, cardID = null, }) => {

    const dispatch = useDispatch();
    const card = useSelector(state => getCard(state, cardID as number));

    const validationSchema = Yup.object({
        title: Yup.string()
            .required()
            .min(2),
        description: Yup.string()
            .required()
            .min(10),
        quantity: Yup.number()
            .required()
            .min(1),
        price: Yup.number()
            .required()
            .min(0),
    });
    
    const formik = useFormik<FormValues>({
        initialValues: {
            title: card?.title || '',
            description: card?.description || '',
            quantity: card?.quantity || 0,
            price: card?.price || 0,
            id: card?.id || Date.now(),
        },
        validationSchema,
        onSubmit: (values) => {
            !card ? dispatch(addCard({ ...values, id: Date.now(), })) && formik.resetForm() : dispatch(editCard({ ...values, }));
            handleClose();
        },
    });

    const getHelperText = (fieldName: keyof FormValues): string => {
        const error = formik.errors[fieldName];
        if (!formik.touched[fieldName]) return '';
        if (Array.isArray(error)) {
            return error.join(', ');
        }
        return error as string || '';
    };

    return (

        <Dialog open={open} onClose={handleClose}>
            <CloseButton onClose={handleClose} />
            <DialogTitle>{card ? 'Editing mode' : 'Adding product mode'}</DialogTitle>
        <DialogContent>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{marginTop:'10px'}}
                            fullWidth
                            id="title"
                            title="title"
                            label="Title"
                            variant="outlined"
                            {...formik.getFieldProps('title')}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={getHelperText('title')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="description"
                            title="description"
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            {...formik.getFieldProps('description')}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={getHelperText('description')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="quantity"
                            title="quantity"
                            label="Quantity"
                            variant="outlined"
                            type="number"
                            {...formik.getFieldProps('quantity')}
                            error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                            helperText={getHelperText('quantity')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="price"
                            title="price"
                            label="Price"
                            variant="outlined"
                            type="number"
                            {...formik.getFieldProps('price')}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={getHelperText('price')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <DialogActions>
                            <Button type="submit" variant="contained" color="primary">
                                save
                            </Button>
                        </DialogActions>
                    </Grid>
                </Grid>
            </form>
        </DialogContent>
        </Dialog>
    );
};