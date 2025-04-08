import { createSlice, createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../../app/store";
import { nanoid } from "nanoid";

export interface Product {
        id: string;
        title: string;
        description: any;
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
                    description: "Apple_iPhone_14_Pro.description",
                    quantity: 50,
                    price: 1199,
                },
                {
                    id: nanoid(),
                    title: 'Samsung Galaxy S23 Ultra',
                    description: "Samsung_Galaxy_S23_Ultra.description",
                    quantity: 40,
                    price: 1299,
                },
                {
                    id: nanoid(),
                    title: 'OpenAI Pixel 7 Pro',
                    description: "OpenAI_Pixel_7_Pro.description",
                    quantity: 35,
                    price: 899,
                },
                {
                    id: nanoid(),
                    title: 'Xiaomi 13 Pro',
                    description: "Xiaomi_13_Pro.description",
                    quantity: 40,
                    price: 999,
                },
                {
                    id: nanoid(),
                    title: 'OnePlus 11',
                    description: "OnePlus_11.description",
                    quantity: 30,
                    price: 799,
                },
                {
                    id: nanoid(),
                    title: 'Apple MacBook Pro 14',
                    description: "Apple_MacBook_Pro_14.description",
                    quantity: 25,
                    price: 1999,
                },
                {
                    id: nanoid(),
                    title: 'Dell XPS 13',
                    description: "Dell_XPS_13.description",
                    quantity: 30,
                    price: 1399,
                },
                {
                    id: nanoid(),
                    title: 'HP Spectre x360',
                    description: "HP_Spectre_x360.description",
                    quantity: 20,
                    price: 1599,
                },
                {
                    id: nanoid(),
                    title: 'Lenovo ThinkPad X1 Carbon',
                    description: "Lenovo_ThinkPad_X1_Carbon.description",
                    quantity: 30,
                    price: 1699,
                },
                {
                    id: nanoid(),
                    title: 'Microsoft Surface Laptop 5',
                    description: "Microsoft_Surface_Laptop_5.description",
                    quantity: 15,
                    price: 1299,
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
                state.items = [...state.items.filter((elem) => elem.id !== action.payload)];
            },
}});

export const getCards = (state: AppState) => state.products.items;
export const getCard = (state: AppState, cardID: string) => state.products.items.find( (elem: Product) => elem.id === cardID );

const selectProductsState = (state: AppState, params: any ) => ({
    products: state.products.items,
    formik: params.formik,
    });

export const selectFilteredAndSortedProducts = createSelector(
        [selectProductsState],
        (productState) => {
            let { products, formik } = productState;

            let filteredProducts = [...products];

            const filters = {
                minPrice: (product: Product) => formik.values.minPrice ? product.price >= Number(formik.values.minPrice) : true,
                maxPrice: (product: Product) => formik.values.maxPrice ? product.price <= Number(formik.values.maxPrice) : true,
                inStock: (product: Product) => formik.values.stockStatus === 'inStock' ? product.quantity > 0 : true,
                outOfStock: (product: Product) => formik.values.stockStatus === 'outOfStock' ? product.quantity == 0 : true,
            };

            Object.values(filters).forEach(filterFn => {
                filteredProducts = filteredProducts.filter(filterFn);
            });

            let currentPage = formik.values.currentPage;
            let memoPage = formik.values.currentPage;

            if (formik.values.searchTerm.trim() !== '') {
                currentPage = 1;
                const searchTerm = formik.values.searchTerm.toLowerCase();
                filteredProducts = filteredProducts.filter((product: Product) =>
                product.title.toLowerCase().includes(searchTerm) ||
                product.id.toLowerCase().includes(searchTerm)
                );
            } else currentPage = memoPage;

            let startIndex: number = (currentPage - 1) * formik.values.limit;
            let endIndex = startIndex + formik.values.limit;
            let paginatedProducts =  [...filteredProducts.slice(startIndex, endIndex)];

            if (!paginatedProducts.length && currentPage!==1) formik.setFieldValue('currentPage', currentPage - 1);

            return paginatedProducts;
        }
        );

export const { addCard, delCard, editCard } = sliceShopCards.actions;
export const productsReducer = sliceShopCards.reducer;