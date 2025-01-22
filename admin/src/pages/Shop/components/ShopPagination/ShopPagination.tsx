import { useMemo, useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { Search, ProductCard } from "../../components";
import { useSelector } from "react-redux";
import { getCards, Product } from "../../slices";

export const ShopPagination = () => {

    const cards = useSelector((state)=>getCards(state));

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const totalPages = Math.ceil(cards.length/10); 
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value);
    const handleSetSearchQuery = (event: React.ChangeEvent<unknown>) => setSearchQuery((event.target as HTMLInputElement).value);
    const filteredCards = useMemo(() => { return cards.filter((card: Product)=>card.title.toLowerCase().includes(searchQuery.toLowerCase())) }, [cards, searchQuery]);

    return (
        <>  
            <Search searchQuery={searchQuery} onSearch={handleSetSearchQuery} />
            <Grid container spacing={4} wrap='wrap' sx={{margin:'20px', width: '90%'}} >
            { filteredCards.slice(startIndex, endIndex).map((card: Product) => ( <ProductCard key={card.id} cardObject={card} /> ))}
            </Grid>
                {cards.length> 10 &&
            <Pagination sx={{marginLeft:'35px', marginBottom:'35px'}}
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange} />}
        </>
)};