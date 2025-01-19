import { ShopAppBar } from './components/ShopAppBar.tsx';
import { useSelector } from 'react-redux';
import { getCards } from './slices/sliceShopCards.ts';
import { ShopPagination } from './components/ShopPagination.tsx';

export const MainPage = () => {

    const cards = useSelector((state)=>getCards(state));

    return (
    <>
        <ShopAppBar />
        <ShopPagination />
    </>
)}