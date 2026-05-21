import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function askAI(message) {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
      {
        inputs: message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`
        }
      }
    );

    return response.data[0].generated_text;
  } catch (error) {
    console.log(error.message);
    return 'Erreur IA';
  }
}
