import { useState } from 'react';
import { Content, Header, SideBar, TemplatePage } from './components';
import { PRODUCTS_PER_PAGE } from './shop.constants';
import { useAppSelector } from '../../app/store';
import { selectFilteredAndSortedProducts } from '../../features/shop';

export const MainPage = () => {

    const limit = PRODUCTS_PER_PAGE;

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [stockStatus, setStockStatus] = useState<'inStock' | 'outOfStock' | null>(null);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => { setMinPrice(Number(e.target.value) || null); };
    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => { setMaxPrice(Number(e.target.value) || null); };

    const handleStockStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStockStatus(e.target.value as 'inStock' | 'outOfStock' | null);
    };

    const handleResetFilters = () => {
        setMinPrice(null);
        setMaxPrice(null);
        setStockStatus(null);
    };

    const { products, totalCount, totalPages } = useAppSelector(state =>
        selectFilteredAndSortedProducts(state, {
        query: searchTerm,
        minPrice: minPrice,
        maxPrice: maxPrice,
        stockStatus: stockStatus,
        page: currentPage,
        limit: limit,
        })
    );


    return (
    <>
        <TemplatePage 
                    header={ <Header search = {searchTerm} setSearch = {setSearchTerm} /> } 
                    content={ <Content  
                                    paginatedProducts={products} 
                                    totalFilteredProducts={totalCount} 
                                    totalPages={totalPages}
                                    currentPage={currentPage}
                                    setPage={setCurrentPage} /> }
                    sidebar= { <SideBar 
                                    minPrice={minPrice}
                                    maxPrice={maxPrice}
                                    stockStatus={stockStatus}
                                    handleMaxPriceChange={handleMaxPriceChange}
                                    handleMinPriceChange={handleMinPriceChange}
                                    handleResetFilters={handleResetFilters}
                                    handleStockStatusChange={handleStockStatusChange} /> } />
    </>
)}