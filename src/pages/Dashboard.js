import React from 'react';
import { Grid, Typography, Button, Card, CardContent, TextField } from '@mui/material';
import { People, Chat, CalendarToday, Add, History, Search } from '@mui/icons-material';

const translations = {
  en: {
    title: "Doctor Chatbot Dashboard",
    totalUsers: "Total Users",
    activeChats: "Active Chats",
    dailyConsultations: "Daily Consultations",
    startNewChat: "Start New Chat",
    viewHistory: "View Chat History",
    searchPlaceholder: "Search...",
  },
  sw: {
    title: "Dashibodi ya Daktari Chatbot",
    totalUsers: "Watumiaji Wote",
    activeChats: "Mazungumzo Yanayoendelea",
    dailyConsultations: "Mashauriano ya Kila Siku",
    startNewChat: "Anzisha Mazungumzo Mpya",
    viewHistory: "Tazama Historia ya Mazungumzo",
    searchPlaceholder: "Tafuta...",
  }
};

const StatCard = ({ icon: Icon, title, value, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Icon sx={{ fontSize: 40, color }} />
        </Grid>
        <Grid item xs>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="h4" component="div">
            {value}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

function Dashboard({ language = 'en' }) {
  const t = translations[language];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {t.title}
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder={t.searchPlaceholder}
        InputProps={{
          startAdornment: <Search />,
        }}
        sx={{ mb: 4 }}
      />

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <StatCard
            icon={People}
            title={t.totalUsers}
            value="1,234"
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            icon={Chat}
            title={t.activeChats}
            value="42"
            color="#2e7d32"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard
            icon={CalendarToday}
            title={t.dailyConsultations}
            value="156"
            color="#ed6c02"
          />
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            startIcon={<Add />}
            fullWidth
            size="large"
          >
            {t.startNewChat}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="outlined"
            startIcon={<History />}
            fullWidth
            size="large"
          >
            {t.viewHistory}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
