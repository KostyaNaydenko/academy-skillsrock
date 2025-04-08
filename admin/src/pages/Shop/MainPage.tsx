import { Header, SideBar, TemplatePage, ShopGridCards } from './components';
import { PRODUCTS_PER_PAGE } from './shop.constants';
import { useAppSelector } from '../../app/store';
import { selectFilteredAndSortedProducts } from '../../features/shop';
import { useFormik } from 'formik';
import { ShopPagination } from './components/ShopPagination/ShopPagination';

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

    const paginatedProducts = useAppSelector(state =>
        selectFilteredAndSortedProducts(state, {
        formik,
        })
    );

    return (

    <TemplatePage
        header= { <Header formik={formik} /> }
        content={ <ShopGridCards products={paginatedProducts} /> }
        sidebar={ <SideBar formik={formik} /> }
        footer= { <ShopPagination formik={formik} /> } />

)}