import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import axios from 'axios';

function RepoCard({ repo }) {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const response = await axios.get(repo.languages_url);
        const languages = Object.keys(response.data);
        setLanguage(languages[0] || 'N/A');
      } catch (error) {
        console.error('Erro ao buscar a linguagem mais usada:', error);
      }
    };

    fetchLanguage();
  }, [repo.languages_url]);

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 2,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        transition: '0.3s',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          {repo.name}
        </Typography>
        {repo.description && (
          <Typography variant="body2" color="textSecondary" paragraph>
            {repo.description}
          </Typography>
        )}
        <Box display="flex" alignItems="center" mt={1} mb={1}>
          <StarIcon color="primary" sx={{ mr: 0.5 }} />
          <Typography variant="body2" sx={{ mr: 2 }}>{repo.stargazers_count}</Typography>

          <CodeIcon color="secondary" sx={{ mr: 0.5 }} />
          <Typography variant="body2" sx={{ mr: 2 }}>{language}</Typography>

          <ForkRightIcon color="action" sx={{ mr: 0.5 }} />
          <Typography variant="body2">{repo.forks_count}</Typography>
        </Box>
      </CardContent>
      <Box display="flex" justifyContent="center" p={2}>
        <Button
          variant="contained"
          href={repo.html_url}
          target="_blank"
          sx={{ mt: 'auto', backgroundColor: '#e91e63'}}
        >
          Ver Repositório
        </Button>
      </Box>
    </Card>
  );
}

export default RepoCard;
