import { FormikErrors, FormikTouched } from 'formik';

export interface FormValues {
    title: string;
    description: string;
    quantity: number;
    price: number;
    id?: string | null;
}

export const getHelperText = (
    fieldName: keyof FormValues,
    errors: FormikErrors<FormValues>,
    touched: FormikTouched<FormValues>
): string => {
    const error = errors[fieldName];
    if (!touched[fieldName]) return '';
    if (Array.isArray(error)) {
        return error.join(', ');
    }
    return error as string || '';
};