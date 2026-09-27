import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "talentai-backend",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`TalentAI backend running on port ${PORT}`);
});
