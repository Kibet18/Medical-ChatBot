import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Import pages
import Dashboard from './pages/Dashboard';
import ChatPage from './pages/ChatPage';
import ReportsPage from './pages/ReportsPage';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'sw' for Kiswahili

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar language={language} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Dashboard language={language} />} />
            <Route path="/chat" element={<ChatPage language={language} />} />
            <Route path="/reports" element={<ReportsPage language={language} />} />
            <Route path="/profile" element={<UserProfile language={language} />} />
            <Route 
              path="/settings" 
              element={<Settings language={language} setLanguage={setLanguage} />} 
            />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
