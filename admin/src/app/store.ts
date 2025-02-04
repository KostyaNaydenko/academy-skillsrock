import { configureStore, createSelector } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getCards, getCart, Product } from '../features/shop';

export const store = configureStore({
    reducer: rootReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();