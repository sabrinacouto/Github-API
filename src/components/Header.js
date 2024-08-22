import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: 'linear-gradient(to right, #9c27b0, #e91e63)', // Gradiente roxo e rosa
        backgroundColor: 'transparent', // Torna a cor de fundo transparente para mostrar o gradiente
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: 'white' }} // Define a cor do texto
        >
          GitHub API
        </Typography>
        <Button
          onClick={handleHomeClick}
          sx={{
            backgroundImage: 'linear-gradient(to right, #9c27b0, #e91e63)', 
            backgroundColor: 'transparent', 
            color: 'white', 
            padding: '6px 16px', 
            borderRadius: '4px', 
            '&:hover': {
              backgroundImage: 'linear-gradient(to right, #8e24aa, #d81b60)', 
              backgroundColor: 'transparent',
              borderColor: '#e91e63', 
            },
          }}
        >
       Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
