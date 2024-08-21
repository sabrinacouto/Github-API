import React from 'react';
import { Grid } from '@mui/material';
import RepoCard from './RepoCard';

function RepoList({ repos }) {
  return (
    <Grid container spacing={2}>
      {repos.map((repo) => (
        <Grid item xs={12} sm={6} md={4} key={repo.id}>
          <RepoCard repo={repo} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RepoList;
