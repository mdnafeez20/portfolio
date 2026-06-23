import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

// Enable CORS so your React frontend (port 5173) can communicate with this backend (port 5000)
app.use(cors());
app.use(express.json());

// API endpoint to handle the AI chat queries
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`, // <-- REPLACE THIS WITH YOUR ACTUAL OPENAI API KEY
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'You are a helpful portfolio assistant for Shalini Lakshmi. Answer any question based on general knowledge or her resume, skills, education, and projects.' 
          },
          { 
            role: 'user', 
            content: userMessage 
          }
        ]
      })
    });
    
    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      res.json({ reply: data.choices[0].message.content });
    } else {
      res.status(500).json({ reply: "Received an empty response from the AI model." });
    }
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ reply: "Sorry, I encountered an error connecting to the intelligence server." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});