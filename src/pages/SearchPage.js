import React, { useState } from 'react';
import { Container, Typography, Pagination, Box } from '@mui/material';
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
    <Container>
      <Typography variant="h4" gutterBottom>
        Encontre aqui os repositórios do Github
      </Typography>
      <SearchBar setUsername={setUsername} />
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">Error: {error}</Typography>}
      {!loading && !error && (
        <>
          <RepoList repos={currentRepos} />
          {repos.length > reposPerPage && (
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Pagination
                count={Math.ceil(repos.length / reposPerPage)}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
}

export default SearchPage;