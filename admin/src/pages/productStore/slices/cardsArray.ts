import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import { createSlice, isAction } from "@reduxjs/toolkit";



const cardsArraySlice = createSlice({
    name: 'arrayCards',

    initialState: {
        cards:[],
        cart: [],
    },
    reducers: {

            addCard: (state, action) => {
                state.cards.push({...action.payload});
            },

            delCard: (state,action) => {
            return {...state, cards: state.cards.filter((elem)=>elem.id!==action.payload)};
            },

            deleteInCart(state, action) {
                let elemInCart  = state.cart.find((elem)=> elem.id==action.payload);
              return {...state, cart: state.cart.filter((elem)=> elem.id!==action.payload), totalQuantity: state.totalQuantity - +elemInCart.quantity, totalPrice: state.totalPrice - (elemInCart.price*elemInCart.quantity) };
              
            },
            
            clearCart(state) {
                state.totalPrice = 0;
                state.totalQuantity = 0;
                state.cart = [];
            },

            updateCard: (state, action)=> {
                const {id ,name, description, quantity, price} = action.payload;
                const cardIndex = state.cards.findIndex((card)=> card.id==id);
                if (cardIndex!== -1) {
                    state.cards[cardIndex] = {id, name, description, quantity, price};
                }
                state.editingCard = null;
            },
            
            openCartAddModal: (state, action) => {
               const card = state.cards.find((elem)=> elem.id==action.payload);
               state.editingCard = {...card,};
               state.isModalCartAdd = state.editingCard.quantity>0?true:alert('Товара нет в наличии');
            },

            setQuantityToCart: (state, action) => {
              // const card = state.cards.find(elem=> elem.id == state.editingCard.id);
                state.editingCard.quantity = action.payload;
                },
            
            addToCart: (state) => {
                const card = state.cards.find(elem=>{ if(elem.id==state.editingCard.id) return elem});
                
                if(+(state.editingCard.quantity)>+(card.quantity)){
                   return alert('Столько у нас нет!!!');
                }
                    state.cart.push(state.editingCard);
                    state.totalQuantity += +(state.editingCard.quantity);
                    state.totalPrice =+ +(state.editingCard.price) * state.totalQuantity;
                    state.isModalCartAdd = false;
                    state.editingCard = null;  
                
            },
}});

export const {addCard, delCard, updateCard, openCartAddModal, addToCart, setQuantityToCart, deleteInCart, clearCart} = cardsArraySlice.actions;
export const arrayCardsReducer = cardsArraySlice.reducer;
export const getCards = (state) => state.arrayCards.cards;