// File: backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// backend/index.js
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(cors({
  origin: "https://mirroronthewall-frontend.onrender.com"
}));

let messages = [
  {
    id: 1,
    sender: "Mom",
    content: "Did you finish your homework?",
    timestamp: "2025-06-01 19:00",
  },
  {
    id: 2,
    sender: "Dad",
    content: "Don’t forget to bring your lunch.",
    timestamp: "2025-06-01 19:15",
  },
    {
    id: 3,
    sender: "Bro",
    content: "Wats up.",
    timestamp: "2025-06-01 20:15",
  }
];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const newMsg = req.body;
  newMsg.id = messages.length + 1;
  messages.push(newMsg);
  res.status(201).json(newMsg);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


