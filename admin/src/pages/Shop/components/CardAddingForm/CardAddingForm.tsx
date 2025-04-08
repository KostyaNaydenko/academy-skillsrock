import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, editCard, getCard } from '../../../../features/shop';
import { AppState } from '../../../../app/store';
import { BoxButtons } from '../../Shop.styles';
import { useTranslation } from 'react-i18next';

interface CardAddingFormProps {
    open: boolean;
    handleClose: any;
    cardID?: string | null;
}

interface FormValues {
    title: string;
    description: string;
    quantity: number;
    price: number;
}

export const CardAddingForm = ({  open, handleClose, cardID = null, }: CardAddingFormProps) => {

    const dispatch = useDispatch();
    const card = useSelector((state: AppState) => getCard(state, cardID as string));

    const { t } = useTranslation(['translation']);

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
            description: card? t(`${card.description}`): '',
            quantity: card?.quantity || 0,
            price: card?.price || 0,
        },
        validationSchema,
        onSubmit: (values) => {
            !card ? dispatch(addCard({ ...values, })) && formik.resetForm() : dispatch(editCard({ ...values, id: card.id, }));
            handleClose();
        },
    });

    return (

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{card ? t('editingProduct') : t('addingProduct')}</DialogTitle>
        <DialogContent>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{marginTop:'10px'}}
                            fullWidth
                            id="title"
                            title="title"
                            label={t("Title")}
                            variant="outlined"
                            {...formik.getFieldProps('title')}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && Boolean(formik.errors.title)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="description"
                            title="description"
                            label={t("Description")}
                            variant="outlined"
                            multiline
                            rows={4}
                            {...formik.getFieldProps('description')}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && Boolean(formik.errors.description)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="quantity"
                            title="quantity"
                            label={t("Quantity")}
                            variant="outlined"
                            type="number"
                            {...formik.getFieldProps('quantity')}
                            error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                            helperText={formik.touched.quantity && Boolean(formik.errors.quantity)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="price"
                            title="price"
                            label={t("Price")}
                            variant="outlined"
                            type="number"
                            {...formik.getFieldProps('price')}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && Boolean(formik.errors.price)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <DialogActions>
                            <BoxButtons >
                                <Button variant='contained' color='secondary' onClick={handleClose} >
                                    {t('close')}
                                </Button>
                                <Button type="submit" variant="contained" color="primary" >
                                    {t('save')}
                                </Button>
                            </BoxButtons>
                        </DialogActions>
                    </Grid>
                </Grid>
            </form>
        </DialogContent>
        </Dialog>
    );
};