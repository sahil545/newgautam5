import { RequestHandler } from "express";
import { z } from "zod";
import { sendEmail } from "../utils/email";

const joinUsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(),
});

export const handleJoinUsForm: RequestHandler = async (req, res) => {
  try {
    const data = joinUsSchema.parse(req.body);

    const recipientEmail = process.env.CONTACT_EMAIL || "sahilbwi4@gmail.com";

    const emailHtml = `
      <h2>New Job Application Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      ${data.message ? `<p><strong>Message/Cover Letter:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>` : ""}
    `;

    const attachments = [];

    // Add resume file if uploaded
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype,
      });
    }

    await sendEmail(
      recipientEmail,
      `New Job Application from ${data.firstName} ${data.lastName}`,
      emailHtml,
      attachments.length > 0 ? attachments : undefined
    );

    res.json({
      success: true,
      message: "Thank you for your submission. We'll review it and get back to you soon!",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    } else {
      console.error("Join us form error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit application. Please try again.",
      });
    }
  }
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
