import { configureStore, createSelector } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getCards, getCart, Product } from '../features/shop';

export const store = configureStore({
    reducer: rootReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const getTotalPrice = createSelector(
    [getCart],
    (cart: Product[]) => cart.reduce((acc, cardObject) => acc + cardObject.price * cardObject.quantity, 0)
);

export const getTotalQuantity = createSelector(
    [getCart],
    (cart: Product[]) => cart.reduce((acc, cardObject) => acc + cardObject.quantity, 0)
);

export const getSearchProducts = () =>
    createSelector(
        [getCards, (_, searchTerm) => searchTerm],
        (products, searchTerm) => {
            if (searchTerm !== '' && searchTerm.trim() !== '') {
                const filteredProducts = products.filter((product: Product) =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
                return filteredProducts;
            } else return products;
        }
    );

    export const getFilteredProducts = () => createSelector(
      [(state, products, minPrice, maxPrice, stockStatus) => ({products, minPrice, maxPrice, stockStatus})],
      ({products, minPrice, maxPrice, stockStatus}) => {
          console.log("getFilteredProducts products:", products, "minPrice:", minPrice, "maxPrice:", maxPrice, "stockStatus:", stockStatus)
          let filteredProducts = [...products];
            const filteredProductsQuantity = filteredProducts.filter(product=>product.quantity>0);
          if (minPrice) {
              filteredProducts = filteredProducts.filter((product) => product.price >= minPrice);
          }
          if (maxPrice) {
              filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice);
          }
          if (stockStatus === 'inStock') {
            filteredProducts = filteredProducts.filter(product=>product.quantity>0);
          }
          if (stockStatus === 'outOfStock') {
            filteredProducts = filteredProducts.filter(product=>product.quantity==0);
          }
        return filteredProducts
      });

export const getPaginatedProducts = () =>
    createSelector(
        [(state, currentPage, filteredProducts) => ({ currentPage, filteredProducts })],
        ({ currentPage, filteredProducts }) => {
            console.log("getPaginatedProducts currentPage:", currentPage, "filteredProducts:", filteredProducts);
            const pageSize = 10;
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
            console.log("getPaginatedProducts paginated products:", paginatedProducts);
            return paginatedProducts;
        }
    );

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();