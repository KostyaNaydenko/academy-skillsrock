import { Dispatch, SetStateAction, useState } from "react";
import { Grid, Pagination, useTheme } from "@mui/material";
import { Product } from "../../../../features/shop";
import { ProductCard } from "../ProductCard";
import { ContentBox, PaginationBox } from "../../Shop.styles";

/* export interface PaginationParams {
    page: number;
    pageSize: number;
} */

interface ContentProps {
  paginatedProducts: Product[];
  totalFilteredProducts: number;
  totalPages: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>
}

export const Content = ( { paginatedProducts, totalFilteredProducts, totalPages, currentPage, setPage }: ContentProps ) => {

    const theme = useTheme();

  /*  const limit = PRODUCTS_PER_PAGE;

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [stockStatus, setStockStatus] = useState<'inStock' | 'outOfStock' | null>(null);
  
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => { setMinPrice(Number(e.target.value) || null); };
    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => { setMaxPrice(Number(e.target.value) || null); };
  
    const handleStockStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setStockStatus(e.target.value as 'inStock' | 'outOfStock' | null);
    };
  
    const handleResetFilters = () => {
      setMinPrice(null);
      setMaxPrice(null);
      setStockStatus(null);
    };
  
    const { products: paginatedProducts, totalCount: totalFilteredProducts, totalPages } = useAppSelector(state =>
      selectFilteredAndSortedProducts(state, {
        query: searchTerm,
        minPrice: minPrice,
        maxPrice: maxPrice,
        stockStatus: stockStatus,
        page: currentPage,
        limit: limit,
      })
    );*/
  
    return (
      <>
        {/*<Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
          <SearchInput
            placeholder="Search product..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            value={searchTerm} />
        </Box>*/}
        <ContentBox>
          <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'center'}}>
            {paginatedProducts.map((product: Product) => (
              <Grid item xs={12} sm={12} md={5.4} lg={3.4} key={product.id}> <ProductCard cardObject={product} /> </Grid>
            ))}
          </Grid>
          {/* <FilterPanel
            minPrice={minPrice}
            maxPrice={maxPrice}
            stockStatus={stockStatus}
            handleMinPriceChange={handleMinPriceChange}
            handleMaxPriceChange={handleMaxPriceChange}
            handleStockStatusChange={handleStockStatusChange}
            handleResetFilters={handleResetFilters}
          /> */}
        </ContentBox>
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