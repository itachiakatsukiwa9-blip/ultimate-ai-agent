import express from 'express';
import dotenv from 'dotenv';
import { askAI } from './ai/huggingface.js';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  const response = await askAI(message);

  res.json({
    success: true,
    response
  });
});

app.listen(3000, () => {
  console.log('Ultimate AI Agent running on port 3000');
});
