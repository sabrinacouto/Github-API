import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';

function RepoCard({ repo }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 2,
        height: 300,
        boxShadow: theme.shadows[3],
        transition: '0.3s',
        '&:hover': {
          boxShadow: theme.shadows[6],
        },
      }}
      component="a" 
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer" 
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {repo.name}
        </Typography>
        {repo.description && (
          <Typography variant="body2" color="textSecondary" paragraph>
            {repo.description}
          </Typography>
        )}
        <Box display="flex" alignItems="center" mt={1}>
          <StarIcon color="primary" sx={{ mr: 0.5 }} />
          <Typography variant="body2">{repo.stargazers_count}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default RepoCard;
