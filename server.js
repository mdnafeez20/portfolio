import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

// Paste your endpoint here
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`, // <-- Replace with your OpenAI API Key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful portfolio assistant for Mohamed Nafeez K M. Answer any question based on general knowledge or his resume/projects.' },
          { role: 'user', content: userMessage }
        ]
      })
    });
    
    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      res.json({ reply: data.choices[0].message.content });
    } else {
      res.status(500).json({ reply: "Did not get a valid response from AI model." });
    }
  } catch (error) {
    res.status(500).json({ reply: "Sorry, I encountered an error connecting to the intelligence server." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});