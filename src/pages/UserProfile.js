import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

const translations = {
  en: {
    title: "User Profile",
    name: "Name",
    age: "Age",
    medicalHistory: "Medical History",
    recentChats: "Recent Chats",
    viewFullChat: "View Full Chat",
    edit: "Edit",
    lastConsultation: "Last Consultation",
    conditions: "Existing Conditions",
    medications: "Current Medications"
  },
  sw: {
    title: "Wasifu wa Mtumiaji",
    name: "Jina",
    age: "Umri",
    medicalHistory: "Historia ya Matibabu",
    recentChats: "Mazungumzo ya Hivi Karibuni",
    viewFullChat: "Tazama Mazungumzo Kamili",
    edit: "Hariri",
    lastConsultation: "Ushauri wa Mwisho",
    conditions: "Hali Zilizopo",
    medications: "Dawa za Sasa"
  }
};

// Sample user data - replace with real data from your backend
const userData = {
  name: "John Doe",
  age: 35,
  medicalHistory: [
    "Hypertension - Diagnosed 2020",
    "Allergies - Pollen",
  ],
  medications: [
    "Lisinopril 10mg daily",
    "Cetirizine 10mg as needed"
  ],
  recentChats: [
    {
      id: 1,
      date: "2023-12-20",
      summary: "Discussed seasonal allergies and medication adjustment"
    },
    {
      id: 2,
      date: "2023-12-15",
      summary: "Regular blood pressure check-up and lifestyle recommendations"
    },
    {
      id: 3,
      date: "2023-12-10",
      summary: "General wellness consultation and diet advice"
    }
  ]
};

function UserProfile({ language = 'en' }) {
  const t = translations[language];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">{t.title}</Typography>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ textTransform: 'none' }}
        >
          {t.edit}
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Personal Information */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>{t.name}</Typography>
            <Typography paragraph>{userData.name}</Typography>
            
            <Typography variant="h6" gutterBottom>{t.age}</Typography>
            <Typography paragraph>{userData.age}</Typography>

            <Typography variant="h6" gutterBottom>{t.medicalHistory}</Typography>
            <List>
              {userData.medicalHistory.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Recent Chats */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>{t.recentChats}</Typography>
            <List>
              {userData.recentChats.map((chat) => (
                <React.Fragment key={chat.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={chat.date}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {chat.summary}
                          </Typography>
                          <Button
                            size="small"
                            sx={{ mt: 1 }}
                          >
                            {t.viewFullChat}
                          </Button>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserProfile;
