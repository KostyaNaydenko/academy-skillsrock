import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Product } from "../sliceShopCards";
import { AppState } from "../../../app/store";

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

export const getTotalPrice = createSelector(
    [(state: AppState) => state.cart.items],
    (cart: Product[]) => cart.reduce((acc, cardObject) => acc + cardObject.price * cardObject.quantity, 0)
);

export const getTotalQuantity = createSelector(
    [(state: AppState) => state.cart.items],
    (cart: Product[]) => cart.reduce((acc, cardObject) => acc + cardObject.quantity, 0)
);

export const {addToCart, deleteInCart, clearCart} = sliceCart.actions;
export const cartReducer = sliceCart.reducer;
export const getCart = ((state: AppState) => state.cart.items);