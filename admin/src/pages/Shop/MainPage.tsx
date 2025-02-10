import { Header, SideBar, TemplatePage, ShopContent } from './components';
import { PRODUCTS_PER_PAGE } from './shop.constants';
import { useAppSelector } from '../../app/store';
import { selectFilteredAndSortedProducts } from '../../features/shop';
import { useFormik } from 'formik';

export const MainPage = () => {

    const formik = useFormik({
        initialValues: {
            searchTerm: '',
            minPrice: null,
            maxPrice: null,
            stockStatus: null,
            currentPage: 1,
            limit: PRODUCTS_PER_PAGE,
        },
        onSubmit(values) {

        },
    })

    const { paginatedProducts, productsLength } = useAppSelector(state =>
        selectFilteredAndSortedProducts(state, {
        ...formik.values,
        })
    );

    return (
    <>
        <TemplatePage 
                    header={ <Header formik={formik} /> } 
                    content={ <ShopContent products={paginatedProducts} length={productsLength} formik={formik} /> }
                    sidebar= { <SideBar formikValues={formik.values} handleChange={formik.handleChange} handleReset={formik.handleReset}  /> } />
    </>
)}