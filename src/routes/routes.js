import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

function AppRoutes() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ backgroundColor: '#292929' }} 
    >
      <Router>
        <Header />
        <Box component="main" flexGrow={1} sx={{ padding: 2 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Box>
  );
}

export default AppRoutes;

