import React, { useState } from 'react';
import { Container, Typography, Pagination, Box, CircularProgress } from '@mui/material';
import SearchBar from '../components/SearchBar';
import RepoList from '../components/RepoList';
import useFetchRepos from '../hooks/useFetchRepos';

function SearchPage() {
    const [username, setUsername] = useState('');
    const { repos, loading, error } = useFetchRepos(username);
    const [page, setPage] = useState(1);
    const reposPerPage = 6;
    const indexOfLastRepo = page * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <Container maxWidth="md" sx={{
            paddingY: 4, backgroundColor: 'white', borderRadius: 2,
            boxShadow: 3,
        }}>
            <Typography variant="h4" gutterBottom sx={{
                marginBottom: 5,
                fontWeight: 'bold',
                backgroundImage: 'linear-gradient(to right, #9c27b0, #e91e63)',
                backgroundClip: 'text',
                color: 'transparent',
            }}>
                Veja aqui os repositórios do GitHub
            </Typography>
            <SearchBar setUsername={setUsername} />
            {loading && (
                <Box display="flex" justifyContent="center" sx={{ marginTop: 4 }}>
                    <CircularProgress color="secondary" />
                </Box>
            )}
            {error && (
                <Typography variant="body1" color="error" sx={{ marginTop: 4 }}>
                    Error: {error}
                </Typography>
            )}
            {!loading && !error && (
                <>
                    <RepoList repos={currentRepos} />
                    {repos.length > reposPerPage && (
                        <Box display="flex" justifyContent="center" marginTop={4}>
                            <Pagination
                                count={Math.ceil(repos.length / reposPerPage)}
                                page={page}
                                onChange={handleChangePage}
                                color="secondary"
                                sx={{
                                    '& .MuiPaginationItem-root': {
                                        color: '#e91e63',
                                    },
                                    '& .MuiPaginationItem-root.Mui-selected': {
                                        backgroundColor: '#e91e63',
                                        color: '#fff',
                                    },
                                }}
                            />
                        </Box>
                    )}
                </>
            )}
        </Container>
    );
}

export default SearchPage;
