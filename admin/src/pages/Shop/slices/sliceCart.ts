import { createSlice } from "@reduxjs/toolkit";

export const sliceCart = createSlice({
    name: 'shopCart',
    initialState: [],

    reducers: {
        addToCart(state, action) {
            const product = state.find( elem => elem.id === action.payload.id );
            return product ? [...state.map(elem => {if(elem.id === product.id) return {...product, quantity: elem.quantity + action.payload.quantity} }) ] : [...state, action.payload];
        },   

        deleteInCart(state, action) {
            return [...state.filter(product => product.id !== action.payload)];
        },

        clearCart() {
            return [];
        },

    }
})

export const {addToCart, deleteInCart, clearCart} = sliceCart.actions;
export const shopCartReducer = sliceCart.reducer;
export const getCart = (state => state.shopCart); 