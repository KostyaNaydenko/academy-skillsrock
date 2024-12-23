import { createSlice } from "@reduxjs/toolkit";

const sliceShopCards = createSlice({
    name: 'ShopCards',
    initialState: [],
    reducers: {

            addCard: (state, action) => {
                const editingCardIndex =  state.find(elem=>action.payload.id === elem.id);
                state.push(action.payload);
            },

            editCard(state,action) {
                const index = state.findIndex(card => card.id === action.payload.id);
                if (index>-1) state[index]=action.payload;
            },

            delCard: (state,action) => {
            return state.filter((elem)=>elem.id!==action.payload);
            },

}});

export const { addCard, delCard, editCard } = sliceShopCards.actions;
export const shopCardsReducer = sliceShopCards.reducer;
export const getCards = (state) => state.shopCards;