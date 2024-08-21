import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/search');
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        GitHub API
      </Typography>
      <Typography variant="body1" gutterBottom>
        Clique no botão abaixo para pesquisar por repositórios do Github.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleStart}>
        Iniciar
      </Button>
    </Container>
  );
}

export default HomePage;
