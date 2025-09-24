import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors"; // 1. Import the cors middleware

dotenv.config(); // loads .env file

const app = express();

app.use(cors()); // 2. Add the cors middleware here, before other middleware and routes
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const persona = `You are a chatbot assistant for AyurSutra, a Panchakarma Center. You provide information about Ayurvedic treatments, products, and general wellness.`;

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: persona,
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  try {
    const result = await model.generateContent(userMessage);
    const replyText = result.response.text();
    res.json({ reply: replyText });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ reply: "Sorry, I am unable to respond at the moment. Please try again later." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));