import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const translations = {
  en: {
    title: "Reports Dashboard",
    symptomsDistribution: "Symptoms Distribution",
    dailyChats: "Daily Chat Count",
    exportReport: "Export Report",
    dateRange: "Date Range",
    userDemographics: "User Demographics"
  },
  sw: {
    title: "Dashibodi ya Ripoti",
    symptomsDistribution: "Ugawaji wa Dalili",
    dailyChats: "Idadi ya Mazungumzo ya Kila Siku",
    exportReport: "Hamisha Ripoti",
    dateRange: "Muda wa Tarehe",
    userDemographics: "Demografia za Watumiaji"
  }
};

// Sample data - replace with real data from your backend
const symptomData = [
  { name: 'Fever', value: 400 },
  { name: 'Cough', value: 300 },
  { name: 'Headache', value: 200 },
  { name: 'Fatigue', value: 100 },
];

const chatData = [
  { name: 'Mon', chats: 40 },
  { name: 'Tue', chats: 30 },
  { name: 'Wed', chats: 20 },
  { name: 'Thu', chats: 27 },
  { name: 'Fri', chats: 18 },
  { name: 'Sat', chats: 23 },
  { name: 'Sun', chats: 34 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ReportsPage({ language = 'en' }) {
  const t = translations[language];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t.title}
      </Typography>

      <Grid container spacing={3}>
        {/* Symptoms Distribution */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {t.symptomsDistribution}
            </Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={symptomData}
                cx={200}
                cy={150}
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {symptomData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Daily Chat Count */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {t.dailyChats}
            </Typography>
            <BarChart
              width={400}
              height={300}
              data={chatData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="chats" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReportsPage;
