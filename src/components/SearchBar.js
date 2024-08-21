import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

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
      <Button variant="contained" color="primary" onClick={handleSearch} sx={{ marginLeft: 2 }}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;