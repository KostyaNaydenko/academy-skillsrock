import { Grid } from "@mui/material";
import { getCards, Product } from "../../../../features/shop";
import { ProductCard } from "../ProductCard";

interface ContentProps {
  products: Product[];
}

export const ShopGridCards = ( { products }: ContentProps ) => (
          <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1}}>
            {products.map((product: Product) => (
              <Grid item xs={12} sm={12} md={5.4} lg={3.4} key={product.id} sx={products.length<3? {margin: '15px'}: null} > <ProductCard cardObject={product} /> </Grid>
            ))}
          </Grid>
);