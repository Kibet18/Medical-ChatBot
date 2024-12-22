import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Box,
} from '@mui/material';
import {
  Home as HomeIcon,
  Chat as ChatIcon,
  Assessment as AssessmentIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const translations = {
  en: {
    home: "Home",
    chats: "Chats",
    reports: "Reports",
    profile: "Profile",
    settings: "Settings"
  },
  sw: {
    home: "Nyumbani",
    chats: "Mazungumzo",
    reports: "Ripoti",
    profile: "Wasifu",
    settings: "Mipangilio"
  }
};

const drawerWidth = 240;

function Sidebar({ language = 'en' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[language];

  const menuItems = [
    { text: t.home, icon: <HomeIcon />, path: '/' },
    { text: t.chats, icon: <ChatIcon />, path: '/chat' },
    { text: t.reports, icon: <AssessmentIcon />, path: '/reports' },
    { text: t.profile, icon: <PersonIcon />, path: '/profile' },
    { text: t.settings, icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: location.pathname === item.path ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}

export default Sidebar;
