const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON request bodies

// Example API endpoint for the chatbot
app.post('/api/chatbot', (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);

  // Example of a response (you can customize this part)
  res.json({ response: `You said: Welcome to Harokopeio University ChatBot Backend` });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
