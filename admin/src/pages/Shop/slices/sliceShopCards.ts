import { createSlice } from "@reduxjs/toolkit";

const sliceShopCards = createSlice({
    name: 'ShopCards',
    initialState: [
        {
            id: 1,
            title: 'Apple iPhone 14 Pro',
            description: 'Flagship smartphone with advanced camera system.',
            quantity: 50,
            price: 1199,
        },
        {
            id: 2,
            title: 'Samsung Galaxy S23 Ultra',
            description: 'Premium Android phone with powerful performance.',
            quantity: 40,
            price: 1299,
        },
        {
            id: 3,
            title: 'OpenAI Pixel 7 Pro',
            description: 'Smartphone with amazing AI and camera capabilities.',
            quantity: 35,
            price: 899,
        },
        {
            id: 4,
            title: 'Xiaomi 13 Pro',
            description: 'Smartphone with very fast charging.',
            quantity: 40,
            price: 999,
        },
        {
            id: 5,
            title: 'OnePlus 11',
            description: 'Smartphone with great performance for gaming.',
            quantity: 30,
            price: 799,
        },
        {
            id: 6,
            title: 'Apple MacBook Pro 14',
            description: 'Professional laptop with powerful processor and retina display.',
            quantity: 25,
            price: 1999,
        },
        {
            id: 7,
            title: 'Dell XPS 13',
            description: 'Compact and lightweight laptop with great screen.',
            quantity: 30,
            price: 1399,
        },
        {
            id: 8,
            title: 'HP Spectre x360',
            description: 'Convertible laptop with premium design and features.',
            quantity: 20,
            price: 1599,
        },
        {
            id: 9,
            title: 'Lenovo ThinkPad X1 Carbon',
            description: 'Reliable business laptop with excellent keyboard.',
            quantity: 30,
            price: 1699,
        },
        {
            id: 10,
            title: 'Microsoft Surface Laptop 5',
            description: 'Lightweight laptop with good design.',
            quantity: 15,
            price: 1299,
        },
        {
            id: 11,
            title: 'Samsung Galaxy A54',
            description: 'Mid-range smartphone with great camera.',
            quantity: 60,
            price: 499,
        },
        {
            id: 12,
            title: 'OpenAI Pixel 7a',
            description: 'Budget-friendly smartphone with good performance.',
            quantity: 55,
            price: 449,
        },
        {
            id: 13,
            title: 'Motorola Edge 40 Pro',
            description: 'Smartphone with fast charging and great screen.',
            quantity: 45,
            price: 699,
        },
        {
            id: 14,
            title: 'Asus ROG Phone 7',
            description: 'Powerful gaming smartphone with advanced cooling.',
            quantity: 20,
            price: 1099,
        },
        {
            id: 15,
            title: 'Nothing Phone (2)',
            description: 'Smartphone with unique design and good performance.',
            quantity: 35,
            price: 649,
        },
        {
            id: 16,
            title: 'Lenovo Yoga Slim 7',
            description: 'Ultra-slim laptop with good performance and battery life.',
            quantity: 28,
            price: 1299,
        },
        {
            id: 17,
            title: 'Acer Swift 5',
            description: 'Lightweight and portable laptop with good features.',
            quantity: 22,
            price: 1199,
        },
        {
            id: 18,
            title: 'LG Gram 17',
            description: 'Large-screen laptop with lightweight design and good battery life.',
            quantity: 18,
            price: 1499,
        },
        {
            id: 19,
            title: 'Razer Blade 15',
            description: 'High-performance gaming laptop with excellent graphics.',
            quantity: 10,
            price: 2499,
        },
        {
            id: 20,
            title: 'Huawei MateBook X Pro',
            description: 'Premium laptop with sleek design and high-resolution screen.',
            quantity: 20,
            price: 1799,
        },
    ],

    reducers: {

            addCard: (state, action) => {
                const editingCardIndex =  state.find(elem=>action.payload.id === elem.id);
                state.push(action.payload);
            },

            editCard(state,action) {
                const index = state.findIndex(card => card.id === action.payload.id);
                if (index>-1) state[index]=action.payload;
            },

            delCard(state,action) {
            return [...state.filter((elem)=>elem.id!==action.payload)];
            },
            

}});

export const { addCard, delCard, editCard } = sliceShopCards.actions;
export const shopCardsReducer = sliceShopCards.reducer;
export const getCards = (state) => state.shopCards;
export const getCard = (state, cardID) => state.shopCards.find( elem => elem.id === cardID );