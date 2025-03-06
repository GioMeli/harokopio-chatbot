const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

// Endpoint to handle chat requests from the frontend
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
      max_tokens: 150,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    const botReply = response.data.choices[0].message.content;
    res.json({ response: botReply });
  } catch (error) {
    console.error('Error contacting OpenAI:', error);
    res.status(500).send('Error processing request');
  }
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
