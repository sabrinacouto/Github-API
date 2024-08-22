import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ setUsername }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setUsername(inputValue);
  };

  return (
    <Box display="flex" alignItems="center" marginBottom={2}>
      <TextField
        label="Insira aqui um nome de usuário Github"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{ marginLeft: 2, minWidth: 'auto', padding: '8px 16px', backgroundColor: '#e91e63' }}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
}

export default SearchBar;
