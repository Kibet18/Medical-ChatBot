import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import { Send, Translate } from '@mui/icons-material';

const translations = {
  en: {
    name: "Name",
    lastMessage: "Last Message",
    inputPlaceholder: "Type your message...",
    quickReplies: {
      symptoms: "What symptoms are you experiencing?",
      moreDetails: "Please provide more details.",
    },
    botGreeting: "How can I help you?",
  },
  sw: {
    name: "Jina",
    lastMessage: "Ujumbe wa Mwisho",
    inputPlaceholder: "Andika ujumbe wako...",
    quickReplies: {
      symptoms: "Unahisi dalili gani?",
      moreDetails: "Tafadhali toa maelezo zaidi.",
    },
    botGreeting: "Ninawezaje kukusaidia?",
  }
};

const ChatMessage = ({ message, isUser }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      mb: 2,
    }}
  >
    <Paper
      sx={{
        p: 2,
        maxWidth: '70%',
        bgcolor: isUser ? 'primary.main' : 'grey.200',
        color: isUser ? 'white' : 'text.primary',
        borderRadius: isUser ? '20px 20px 0 20px' : '20px 20px 20px 0',
      }}
    >
      <Typography>{message}</Typography>
    </Paper>
  </Box>
);

function ChatPage({ language = 'en' }) {
  const t = translations[language];
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { message: t.botGreeting, isUser: false }
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { message, isUser: true }]);
    
    try {
      // Call your backend API here
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: message,
          language: language,
        }),
      });

      const data = await response.json();
      
      // Add bot response to chat
      setChatHistory(prev => [...prev, {
        message: language === 'sw' ? data.translated_response : data.response,
        isUser: false
      }]);
    } catch (error) {
      console.error('Error:', error);
    }

    setMessage('');
  };

  const handleQuickReply = (reply) => {
    setMessage(reply);
  };

  return (
    <Grid container spacing={2} sx={{ height: 'calc(100vh - 100px)' }}>
      {/* User List */}
      <Grid item xs={12} md={3}>
        <Paper sx={{ height: '100%', overflow: 'auto' }}>
          <List>
            {['John Doe', 'Jane Smith'].map((user) => (
              <ListItem key={user} button>
                <ListItemText
                  primary={user}
                  secondary="Last message..."
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>

      {/* Chat Area */}
      <Grid item xs={12} md={9}>
        <Paper sx={{ height: '100%', p: 2, display: 'flex', flexDirection: 'column' }}>
          {/* Messages */}
          <Box sx={{ flexGrow: 1, overflow: 'auto', mb: 2 }}>
            {chatHistory.map((chat, index) => (
              <ChatMessage
                key={index}
                message={chat.message}
                isUser={chat.isUser}
              />
            ))}
          </Box>

          {/* Quick Replies */}
          <Box sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
              onClick={() => handleQuickReply(t.quickReplies.symptoms)}
            >
              {t.quickReplies.symptoms}
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleQuickReply(t.quickReplies.moreDetails)}
            >
              {t.quickReplies.moreDetails}
            </Button>
          </Box>

          {/* Input Area */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={t.inputPlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <IconButton
              color="primary"
              onClick={() => handleSend()}
              sx={{ ml: 1 }}
            >
              <Send />
            </IconButton>
            <IconButton
              onClick={() => {/* Toggle language */}}
              sx={{ ml: 1 }}
            >
              <Translate />
            </IconButton>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ChatPage;
