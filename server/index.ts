import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import { handleDemo } from "./routes/demo";
import { handleContactForm } from "./routes/contact";
import { handleJoinUsForm } from "./routes/joinus";
import { handleChat } from "./routes/chat";

export function createServer() {
  const app = express();

  // Configure multer for file uploads
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: (_req, file, cb) => {
      // Allow only PDF, DOC, DOCX formats
      const allowedMimes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type. Only PDF, DOC, and DOCX are allowed."));
      }
    },
  });

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Form submission endpoints
  app.post("/api/contact", handleContactForm);
  app.post("/api/joinus", upload.single("resume"), handleJoinUsForm);

  // Chat endpoint
  app.post("/api/chat", handleChat);

  return app;
}
