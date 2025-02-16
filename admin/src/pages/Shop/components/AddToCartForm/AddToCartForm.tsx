import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button, Grid, DialogContent, Dialog, DialogTitle, DialogActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCard, addToCart } from '../../../../features/shop';
import { AppState } from '../../../../app/store';
import { BoxButtons } from '../../Shop.styles';
import { useTranslation } from 'react-i18next';


interface CartProps {
    cardID: string | null;
    open: boolean;
    handleClose: any;
}

export const AddToCartForm = ({ cardID = null, open, handleClose }: CartProps ) => {

    const { t } = useTranslation(['translation']);

    const dispatch = useDispatch();
    const card = useSelector((state: AppState) => getCard(state, cardID as string));

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
            <DialogTitle sx={{marginTop:'10px'}} >{t('setQuantity')}</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{margin:'10px'}}
                                fullWidth
                                id="quantity"
                                title="quantity"
                                label={t("Quantity")}
                                variant="outlined"
                                type="number"
                                {...formik.getFieldProps('quantity')}
                                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                                helperText={formik.touched.quantity && formik.errors.quantity}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DialogActions>
                                <BoxButtons >
                                    <Button variant='contained' color='secondary' onClick={handleClose} >
                                        {t("close")}
                                    </Button>
                                    <Button type="submit" variant="contained" color="primary">
                                        {t("add")}
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