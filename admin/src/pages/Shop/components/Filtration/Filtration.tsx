import { useState } from "react";
import { Search } from "../Search";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { getCards } from "../../slices";
import { ShopPagination } from "../ShopPagination";

export const Filtration = () => {

    const products = useSelector((state: RootState) => getCards(state) );

    const [searchQuery, setSearchQuery] = useState('');

    const handleSetSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);
    const searchFilter = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
            <Search searchQuery={searchQuery} onSearch={handleSetSearchQuery} />
            <ShopPagination searchQ={searchQuery} products={searchFilter} />
        </>
)};