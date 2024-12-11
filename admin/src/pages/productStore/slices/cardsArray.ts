import { createSlice } from "@reduxjs/toolkit";



const cardsArraySlice = createSlice({
    name: 'arrayCards',

    initialState: {
        card: {
                id: Date.now(),
                name: '',
                description: '',
                quantity: '',
                price: '',
            },
        cards:[],
        cart: [],
        totalQuantity: 0,
        totalPrice: 0,
        editingCard: null,
        isModalOpen: false,
        isModalCartAdd: false,
        isModalCartOpen: false,
    },
    reducers: {

            setName: (state, action) => {
                if (!state.editingCard) {  
                state.card.name = action.payload;
                } else { 
                    state.editingCard.name = action.payload;
                }
            },
            setDesc: (state, action) => {
                if (!state.editingCard) {  
                    state.card.description = action.payload;
                    } else { 
                        state.editingCard.description = action.payload;
                    }
            },
            setQuantity: (state, action) => {
                if (!state.editingCard) {  
                    state.card.quantity = action.payload;
                    } else { 
                        state.editingCard.quantity = action.payload;
                    }
            },
            setPrice: (state, action) => {
                if (!state.editingCard) {  
                    state.card.price = action.payload;
                    } else { 
                        state.editingCard.price = action.payload;
                    }
            },

            openModalWithEditing: (state, action) => {
                state.editingCard = state.cards.find((elem)=>elem.id==action.payload);
                state.card.name = state.editingCard.name;
                state.card.description = state.editingCard.description;
                state.card.quantity = state.editingCard.quantity;
                state.card.price = state.editingCard.price;
                state.isModalOpen = true;
                
            },

            openModal: (state, action) => {
                state.isModalOpen = action.payload;
            },

            addCard: (state, action) => {
                state.cards.push({...action.payload, id: Date.now(), modalIsOpen: false,});
                state.card.name = '';
                state.card.description = '';
                state.card.quantity = '';
                state.card.price = '';
            },

            delCard: (state,action) => {
            return {...state, cards: state.cards.filter((elem)=>elem.id!=action.payload)};
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
                const card = state.cards.find(elem=>elem.id==state.editingCard.id);
                if (card.quantity>=state.editingCard.quantity) {
                    state.cart.push(state.editingCard);
                    state.totalQuantity += +state.editingCard.quantity;
                    state.totalPrice += state.editingCard.price * state.totalQuantity;
                    state.isModalCartAdd = false;
                    state.editingCard = null;
                } else {
                    alert('Столько у нас нет!!!');
                }
            },

            openCartModal: (state) => {
                state.isModalCartOpen = true;
            },
}});

export const {addCard, delCard, openModal, openModalWithEditing, updateCard, setName, setDesc, setQuantity, setPrice, openCartAddModal, addToCart, setQuantityToCart, openCartModal} = cardsArraySlice.actions;
export const arrayCardsReducer = cardsArraySlice.reducer;