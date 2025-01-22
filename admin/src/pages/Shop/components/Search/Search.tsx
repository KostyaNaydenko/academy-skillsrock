import { OutlinedInput } from '@mui/material';

interface SearchProps {
    onSearch: (event: any) => void;
    searchQuery: string;
}

export const Search: React.FC<SearchProps> = ({onSearch, searchQuery}) => {

    return (
        <OutlinedInput
            placeholder="Search product..."
            onChange={onSearch}
            value={searchQuery}
            sx={{ borderRadius:'15px', marginTop: '10px', marginLeft:'50px', marginBottom:'0px', maxHeight: '50px', maxWidth:'300px'}}
        />
    );
};