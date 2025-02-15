import { Pagination } from "@mui/material";
import { useAppSelector } from "../../../../app/store";
import { getCards } from "../../../../features/shop";


interface IShopPaginationProps {
    formik: any;
};

export const ShopPagination = ( {  formik }: IShopPaginationProps ) => {
    
    const length = useAppSelector(getCards).length;

    return ( 
    <>
    { length > formik.values.limit && (
        <Pagination sx={{margin: '30px', }}
            count={Math.ceil(length/formik.values.limit)}
            page={formik.values.currentPage}
            onChange={(e: React.ChangeEvent<unknown>, page: number) => formik.setFieldValue('currentPage', page)} />
    )}
    </>
)};