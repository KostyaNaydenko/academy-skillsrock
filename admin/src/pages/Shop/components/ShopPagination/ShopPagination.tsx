import { useCallback, useEffect, useMemo, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { Product } from "../../slices";
import { ProductCard } from "../ProductCard";

interface ShopPaginationProps {
    products: Product[];
    searchQ: string;
}

export const ShopPagination: React.FC<ShopPaginationProps> = ( { products, searchQ } ) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [memoPage, setMemoPage] = useState(0);

    const totalPages = useMemo(() => Math.ceil(products.length/10), [products] ); 
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, value: number) =>{ setCurrentPage(value) },[currentPage, products]);
    const paginationProducts = useMemo( () => products.slice(startIndex, endIndex) , [products, currentPage] );
    
    useEffect(() => { 
        if (searchQ!='' && currentPage>1) {setMemoPage(currentPage); setCurrentPage(1)} 
            else if (searchQ==''&& memoPage!=0) {setCurrentPage(memoPage); setMemoPage(0)} 
        }, [products]);

    return (
        <>
            <Grid container spacing={4} wrap='wrap' sx={{ marginLeft:'50px', marginTop:'0px',  width: '90%'}} >
                {paginationProducts.map((product: Product)=> <ProductCard key={product.id} cardObject={product} /> ) }
            </Grid>
            {products.length > 10 &&
            <Pagination sx={{marginLeft:'35px', marginBottom:'35px',}}
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange} />}
        </>
)};