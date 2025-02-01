import { useState } from "react";
import { Box, Button, Grid, Pagination } from "@mui/material";
import { Product } from "../../../../features/shop";
import { ProductCard } from "../ProductCard";
import { useSelector } from "react-redux";
import { getSearchProducts, getPaginatedProducts, getFilteredProducts } from "../../../../app/store";
import { SearchInput } from "../../Shop.styles";
import { FilterPanel } from "../FilterPanel";

export interface PaginationParams {
    page: number;
    pageSize: number;
}

export const FilteredProducts = () => {

    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const searchedProducts = useSelector((state) => getSearchProducts()(state,searchTerm));
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
    const [stockStatus, setStockStatus] = useState<'inStock' | 'outOfStock' | undefined>(undefined);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(e.target.value) || undefined);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(e.target.value) || undefined);
    };

    const handleStockStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStockStatus(e.target.value as 'inStock' | 'outOfStock' | undefined);
    };

      const handleResetFilters = () => {
          setMinPrice(undefined);
          setMaxPrice(undefined);
          setStockStatus(undefined);
    };

    const filteredProducts = useSelector(state => getFilteredProducts()(state, searchedProducts, minPrice, maxPrice, stockStatus));



    const totalPages = Math.ceil(filteredProducts.length/10);
    const paginatedProducts = useSelector((state) => {
        const p = getPaginatedProducts()(state, currentPage, filteredProducts)
        return p
    });


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement> ) => setSearchTerm(e.target.value);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => setCurrentPage(page);


    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', }}>
                <SearchInput
                    placeholder="Search product..."
                    onChange={handleSearch}
                    value={searchTerm} />
                  <FilterPanel open={open} 
                   minPrice={minPrice}
                    maxPrice={maxPrice}
                    stockStatus={stockStatus}
                    handleMinPriceChange={handleMinPriceChange}
                    handleMaxPriceChange={handleMaxPriceChange}
                    handleStockStatusChange={handleStockStatusChange}
                    handleResetFilters={handleResetFilters}
                    />
                  <Button size="medium" variant="contained" color="primary" onClick={()=>setOpen(!open)} sx={{marginTop:'11px', marginRight: '140px', maxHeight: '40px'}} >
                    {open ? 'Hide filters' : 'Show filters'}
                </Button>
            </Box>
            <Grid container spacing={4} wrap='wrap' sx={{ marginLeft: '50px', width: '90%', zIndex: 1 }}>
                {paginatedProducts.map((product: Product) => <ProductCard key={product.id} cardObject={product} />)}
            </Grid>
            { filteredProducts.length > 0 && totalPages > 1 && (
                <Pagination
                    sx={{ marginLeft: '35px', marginBottom: '35px' }}
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange} />
            ) }
        </>
    );
};