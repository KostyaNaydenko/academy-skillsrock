import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../sliceShopCards";
import { RootState } from "../../../../app/store";

interface state {
    items: Product[];
}

const initialState: state = { items: [] }; 

export const sliceCart = createSlice({
    name: 'shopCart',
    initialState,

    reducers: {
        addToCart(state, action) {
            const product = state.items.find( elem => elem.id === action.payload.id );
            state.items = product ? [...state.items.map(elem => {if(elem.id === product.id) return {...product, quantity: elem.quantity + action.payload.quantity} }) ] : [...state.items, action.payload];
        },

        deleteInCart(state, action) {
            state.items = [...state.items.filter(product => product.id !== action.payload)];
        },

        clearCart(state) {
            state.items = [];
        },

    }
})

export const {addToCart, deleteInCart, clearCart} = sliceCart.actions;
export const shopCartReducer = sliceCart.reducer;
export const getCart = ((state: RootState) => state.shopCart.items);