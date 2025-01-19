import React, { useMemo, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { ProductCard } from "./ProductCard.tsx";
import { Search } from "./ Search.tsx";
import { useSelector } from "react-redux";
import { getCards } from "../slices/sliceShopCards.ts";

export const ShopPagination = () => {

    const cards = useSelector((state)=>getCards(state));

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const totalPages = Math.ceil(cards.length/10); 
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    const handlePageChange = (event, value) => setCurrentPage(value);
    const handleSetSearchQuery = event => setSearchQuery(event.target.value);
    const filteredCards = useMemo(() => { return cards.filter(card=>card.title.toLowerCase().includes(searchQuery.toLowerCase())) }, [cards, searchQuery]);
    
    return (
        <> 
            <Search searchQuery={searchQuery} onSearch={handleSetSearchQuery} />
            <Grid container spacing={4} wrap='wrap' sx={{margin:'20px', width: '90%'}} >
                    {filteredCards.slice(startIndex, endIndex).map((elem) => ( <ProductCard key={elem.id} cardObject={elem} /> ))}
            </Grid>
                {cards.length> 10 &&
            <Pagination sx={{marginLeft:'35px', marginBottom:'35px'}}
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange} />}
        </>
)};