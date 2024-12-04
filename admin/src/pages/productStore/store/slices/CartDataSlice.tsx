/*import { createSlice } from "@reduxjs/toolkit";

interface CartDataSlice {
    items: object[];
}

const initialState: CartDataSlice = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<object>) => {
            state.items.push(action.payload);
        },

        removeItem: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }

})*/