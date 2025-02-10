import { Grid, Pagination } from "@mui/material";
import { Product } from "../../../../features/shop";
import { ProductCard } from "../ProductCard";
import { PaginationBox } from "../../Shop.styles";
import { PRODUCTS_PER_PAGE } from "../../shop.constants";

interface ContentProps {
  products: Product[];
  length: number;
  formik: any;
}

export const ShopContent = ( { products, length , formik }: ContentProps ) => {

    return (
        <>
          <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'center'}}>
            {products.map((product: Product) => (
              <Grid item xs={12} sm={12} md={5.4} lg={3.4} key={product.id}> <ProductCard cardObject={product} /> </Grid>
            ))}
          </Grid>
        
          <PaginationBox>
            {products.length > 0 && (
              <Pagination
                count={Math.ceil(length/formik.values.limit)}
                page={formik.values.currentPage}
                onChange={(e: React.ChangeEvent<unknown>, page: number) => formik.setFieldValue('currentPage', page)}
                />
            )} 
          </PaginationBox>
        </>
    );
  };