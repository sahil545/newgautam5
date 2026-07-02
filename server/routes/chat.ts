import { RequestHandler } from "express";
import { findMatchingResponse } from "../data/chatbot-qa";

export const handleChat: RequestHandler = (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const result = findMatchingResponse(message);
    res.json({ response: result.response, links: result.links || [] });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
