import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/sliceCart.ts';

export const CartAddingForm = ({selectedCard, setSelected, onClose}) => {
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        quantity: Yup.number()
            .required('Обязательное поле')
            .min(1, 'Количество должно быть больше нуля'),
    });

    const formik = useFormik({
        initialValues: {quantity: '',},
        validationSchema,
        onSubmit: (values) => {
            dispatch(addToCart({...selectedCard, quantity: values.quantity}));
            setSelected(null);
            onClose();
        },
    });

    return (
        <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
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
                    <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              добавить
            </Button>
          </Grid>
                </Grid>
            </form>
        </Container>
    );
};