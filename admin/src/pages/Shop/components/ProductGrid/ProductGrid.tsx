import { Grid } from "@mui/material";
import { Product } from "../../slices";
import { ProductCard } from "../ProductCard";
import { useEffect, useMemo } from "react";

interface ProductGridProps {
    products: Product[];
}

export const ProductGrid = ({products}: ProductGridProps) => {

    return (
        <Grid container spacing={4} wrap='wrap' sx={{ marginLeft:'50px', marginTop:'0px',  width: '90%'}} >
            {products.map((product: Product)=> <ProductCard key={product.id} cardObject={product} /> ) }
        </Grid>
)};