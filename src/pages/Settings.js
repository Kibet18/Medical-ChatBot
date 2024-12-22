import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import { Save as SaveIcon, Support as SupportIcon } from '@mui/icons-material';

const translations = {
  en: {
    title: "Settings",
    language: "Language",
    notifications: "Notifications",
    profile: "Profile Settings",
    support: "Contact Support",
    save: "Save Changes",
    chatbotName: "Chatbot Name",
    enableNotifications: "Enable Notifications",
    enableSound: "Enable Sound",
    darkMode: "Dark Mode",
    fontSize: "Font Size",
    languages: {
      en: "English",
      sw: "Kiswahili"
    }
  },
  sw: {
    title: "Mipangilio",
    language: "Lugha",
    notifications: "Arifa",
    profile: "Mipangilio ya Wasifu",
    support: "Wasiliana na Usaidizi",
    save: "Hifadhi Mabadiliko",
    chatbotName: "Jina la Chatbot",
    enableNotifications: "Wezesha Arifa",
    enableSound: "Wezesha Sauti",
    darkMode: "Hali ya Giza",
    fontSize: "Ukubwa wa Fonti",
    languages: {
      en: "Kiingereza",
      sw: "Kiswahili"
    }
  }
};

function Settings({ language = 'en', setLanguage }) {
  const t = translations[language];
  const [notifications, setNotifications] = React.useState(true);
  const [sound, setSound] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [fontSize, setFontSize] = React.useState('medium');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSave = () => {
    // Implement settings save functionality
    console.log('Settings saved');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t.title}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t.language}
            </Typography>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="language-select-label">{t.language}</InputLabel>
              <Select
                labelId="language-select-label"
                value={language}
                label={t.language}
                onChange={handleLanguageChange}
              >
                <MenuItem value="en">{t.languages.en}</MenuItem>
                <MenuItem value="sw">{t.languages.sw}</MenuItem>
              </Select>
            </FormControl>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              {t.notifications}
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                />
              }
              label={t.enableNotifications}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={sound}
                  onChange={(e) => setSound(e.target.checked)}
                />
              }
              label={t.enableSound}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t.profile}
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
              }
              label={t.darkMode}
            />

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="font-size-label">{t.fontSize}</InputLabel>
              <Select
                labelId="font-size-label"
                value={fontSize}
                label={t.fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              >
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="large">Large</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSave}
        >
          {t.save}
        </Button>
        <Button
          variant="outlined"
          startIcon={<SupportIcon />}
        >
          {t.support}
        </Button>
      </Box>
    </Box>
  );
}

export default Settings;
