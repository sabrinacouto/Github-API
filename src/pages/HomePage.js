import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/search');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
      sx={{ padding: 3 }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
          padding: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#e91e63' }}>
          GitHub API
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: '#555' }}>
          Clique no botão abaixo para pesquisar por repositórios do GitHub.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleStart}
          sx={{
            marginTop: 2,
            backgroundColor: '#e91e63',
            '&:hover': {
              backgroundColor: '#d81b60',
            },
          }}
        >
          Iniciar
        </Button>
      </Container>
    </Box>
  );
}

export default HomePage;

