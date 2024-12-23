import { createSlice } from "@reduxjs/toolkit";

export const sliceCart = createSlice({
    name: 'shopCart',
    initialState: [],

    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },   

        deleteInCart(state, action) {
          const card = state.find((elem)=> elem.id==action.payload.id);
          return [...state.filter(elem=>elem.id!==card.id)];
        },

        clearCart() {
            return [];
        },

    }
})

export const {addToCart, deleteInCart, clearCart} = sliceCart.actions;
export const shopCartReducer = sliceCart.reducer;
export const getCart = (state => state.shopCart); 