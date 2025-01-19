import React, { useState, useMemo } from 'react';
import { Input, OutlinedInput, TextField } from '@mui/material';

export const Search = ({onSearch, searchQuery}) => {

    return (
        <OutlinedInput
        placeholder="Search product..."
        onChange={onSearch}
        value={searchQuery}
        sx={{ borderRadius:'15px', marginTop: '10px', marginLeft:'50px', marginBottom:'0px'}}
        />
    );
};