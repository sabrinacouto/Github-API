import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function RepoCard({ repo }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{repo.name}</Typography>
        {repo.description && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {repo.description}
          </Typography>
        )}
        <Typography variant="body2">Stars: {repo.stargazers_count}</Typography>
        <Button
          variant="contained"
          color="primary"
          href={repo.html_url}
          target="_blank"
          sx={{ marginTop: 2 }}
        >
         Clique aqui para visualizar
        </Button>
      </CardContent>
    </Card>
  );
}

export default RepoCard;