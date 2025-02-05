import { Dispatch, SetStateAction } from "react";
import { Grid, Pagination } from "@mui/material";
import { Product } from "../../../../features/shop";
import { ProductCard } from "../ProductCard";
import { PaginationBox } from "../../Shop.styles";

interface ContentProps {
  paginatedProducts: Product[];
  totalFilteredProducts: number;
  totalPages: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>
}

export const Content = ( { paginatedProducts, totalFilteredProducts, totalPages, currentPage, setPage }: ContentProps ) => {

    return (
        <>
          <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'center'}}>
            {paginatedProducts.map((product: Product) => (
              <Grid item xs={12} sm={12} md={5.4} lg={3.4} key={product.id}> <ProductCard cardObject={product} /> </Grid>
            ))}
          </Grid>
        
          <PaginationBox>
            {totalFilteredProducts > 0 && totalPages > 1 && (
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(e: React.ChangeEvent<unknown>, page: number) => setPage(page)} />
            )} 
          </PaginationBox>
        </>
    );
  };