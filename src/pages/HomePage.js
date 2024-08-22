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
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        backgroundImage: 'linear-gradient(to right, #9c27b0, #e91e63)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        display: 'inline',
                    }}
                >
                    GitHub API
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: '#555', margin: '20px' }}>
                    Clique no botão abaixo para pesquisar por repositórios do GitHub.
                </Typography>
                <Button
                    variant="contained"
                    onClick={handleStart}
                    sx={{
                        marginTop: 2,
                        paddingX: 10,
                        backgroundImage: 'linear-gradient(to right, #9c27b0, #e91e63)',
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderRadius: 1,
                        transition: 'transform 0.3s, background-image 0.3s', 
                        '&:hover': {
                            backgroundImage: 'linear-gradient(to right, #8e24aa, #d81b60)',
                            transform: 'scale(1.05)', 
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

