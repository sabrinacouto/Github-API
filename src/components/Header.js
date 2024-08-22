import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#e91e63' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          GitHub API 
        </Typography>
        <Button color="inherit" onClick={handleHomeClick}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;