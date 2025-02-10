import { createSlice, createSelector } from "@reduxjs/toolkit";
import { AppState, useAppSelector } from "../../../app/store";
import { nanoid } from "nanoid";

export interface Product {
        id: string;
        title: string;
        description: string;
        quantity: number;
        price: number;
    }

    interface state {
        items: Product[];
    }

    const initialState: state = {
        items: [
                {
                    id: nanoid(),
                    title: 'Apple iPhone 14 Pro',
                    description: 'Flagship smartphone with advanced camera system.',
                    quantity: 50,
                    price: 1199,
                },
                {
                    id: nanoid(),
                    title: 'Samsung Galaxy S23 Ultra',
                    description: 'Premium Android phone with powerful performance.',
                    quantity: 40,
                    price: 1299,
                },
                {
                    id: nanoid(),
                    title: 'OpenAI Pixel 7 Pro',
                    description: 'Smartphone with amazing AI and camera capabilities.',
                    quantity: 35,
                    price: 899,
                },
                {
                    id: nanoid(),
                    title: 'Xiaomi 13 Pro',
                    description: 'Smartphone with very fast charging.',
                    quantity: 40,
                    price: 999,
                },
                {
                    id: nanoid(),
                    title: 'OnePlus 11',
                    description: 'Smartphone with great performance for gaming.',
                    quantity: 30,
                    price: 799,
                },
                {
                    id: nanoid(),
                    title: 'Apple MacBook Pro 14',
                    description: 'Professional laptop with powerful processor and retina display.',
                    quantity: 25,
                    price: 1999,
                },
                {
                    id: nanoid(),
                    title: 'Dell XPS 13',
                    description: 'Compact and lightweight laptop with great screen.',
                    quantity: 30,
                    price: 1399,
                },
                {
                    id: nanoid(),
                    title: 'HP Spectre x360',
                    description: 'Convertible laptop with premium design and features.',
                    quantity: 20,
                    price: 1599,
                },
                {
                    id: nanoid(),
                    title: 'Lenovo ThinkPad X1 Carbon',
                    description: 'Reliable business laptop with excellent keyboard.',
                    quantity: 30,
                    price: 1699,
                },
                {
                    id: nanoid(),
                    title: 'Microsoft Surface Laptop 5',
                    description: 'Lightweight laptop with good design.',
                    quantity: 15,
                    price: 1299,
                },
                {
                    id: nanoid(),
                    title: 'Samsung Galaxy A54',
                    description: 'Mid-range smartphone with great camera.',
                    quantity: 60,
                    price: 499,
                },
                {
                    id: nanoid(),
                    title: 'OpenAI Pixel 7a',
                    description: 'Budget-friendly smartphone with good performance.',
                    quantity: 55,
                    price: 449,
                },
                {
                    id: nanoid(),
                    title: 'Motorola Edge 40 Pro',
                    description: 'Smartphone with fast charging and great screen.',
                    quantity: 45,
                    price: 699,
                },
                {
                    id: nanoid(),
                    title: 'Asus ROG Phone 7',
                    description: 'Powerful gaming smartphone with advanced cooling.',
                    quantity: 20,
                    price: 1099,
                },
                {
                    id: nanoid(),
                    title: 'Nothing Phone (2)',
                    description: 'Smartphone with unique design and good performance.',
                    quantity: 35,
                    price: 649,
                },
                {
                    id: nanoid(),
                    title: 'Lenovo Yoga Slim 7',
                    description: 'Ultra-slim laptop with good performance and battery life.',
                    quantity: 28,
                    price: 1299,
                },
                {
                    id: nanoid(),
                    title: 'Acer Swift 5',
                    description: 'Lightweight and portable laptop with good features.',
                    quantity: 22,
                    price: 1199,
                },
                {
                    id: nanoid(),
                    title: 'LG Gram 17',
                    description: 'Large-screen laptop with lightweight design and good battery life.',
                    quantity: 18,
                    price: 1499,
                },
                {
                    id: nanoid(),
                    title: 'Razer Blade 15',
                    description: 'High-performance gaming laptop with excellent graphics.',
                    quantity: 10,
                    price: 2499,
                },
                {
                    id: nanoid(),
                    title: 'Huawei MateBook X Pro',
                    description: 'Premium laptop with sleek design and high-resolution screen.',
                    quantity: 20,
                    price: 1799,
                },
            ],
        };

const sliceShopCards = createSlice({
    name: 'ShopCards',
    initialState,
    reducers: {
            addCard(state, action) {
                state.items.push({...action.payload, id: nanoid()});
            },

            editCard(state,action) {
                const index = state.items.findIndex(card => card.id === action.payload.id);
                if (index>-1) state.items[index] = {...action.payload};
            },

            delCard(state, action) {
                state.items = state.items.filter((elem) => elem.id !== action.payload);
            },
}});

const selectProductsState = (state: AppState, params: any ) => ({
    products: state.products.items,
    query: params.searchTerm,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
    stockStatus: params.stockStatus,
    page: params.currentPage,
    limit: params.limit,
    });

    export const selectFilteredAndSortedProducts = createSelector(
        [selectProductsState],
        (productState) => {
            const { products, query, minPrice, maxPrice, stockStatus, page, limit } = productState;
        
            let filteredProducts = [...products];
        
            const filters = {
                minPrice: (product: Product) => minPrice ? product.price >= Number(minPrice) : true,
                maxPrice: (product: Product) => maxPrice ? product.price <= Number(maxPrice) : true,
                inStock: (product: Product) => stockStatus === 'inStock' ? product.quantity > 0 : true,
                outOfStock: (product: Product) => stockStatus === 'outOfStock' ? product.quantity == 0 : true,
            };
        
            Object.values(filters).forEach(filterFn => {
                filteredProducts = filteredProducts.filter(filterFn);
            });
        
            let currentPage = page || 1;
            let memoPage = page || 1;
        
            if (query && query.trim() !== '') {
                currentPage = 1;
                const searchTerm = query.toLowerCase();
                filteredProducts = filteredProducts.filter((product: Product) =>
                product.title.toLowerCase().includes(searchTerm) ||
                product.id.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
                );
            }
        
            if (query && query.trim() === '') currentPage = memoPage;
        
            const totalCount = filteredProducts.length;
        
            const pageSize = limit;
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
        
            return {
                paginatedProducts: paginatedProducts,
                productsLength: totalCount,
            };
            }
        );

export const { addCard, delCard, editCard } = sliceShopCards.actions;
export const productsReducer = sliceShopCards.reducer;
export const getCards = (state: AppState) => state.products.items;
export const getCard = (state: AppState, cardID: string) => state.products.items.find( (elem: Product) => elem.id === cardID );