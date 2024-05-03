import { configureEmailTemplate } from "../../email/email.config";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, message, template } = req.body;
    console.log("template.", template);
    const context = { subject, message: JSON.parse(message) };
    try {
      const transporter = configureEmailTemplate(template);
      await transporter.sendMail({
        from: "support@smilaxglobal.com",
        to,
        subject,
        template,
        context,
      });

      // console.log("Email sent:", info.messageId);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Email sending failed:", error);
      res.status(500).json({ message: "Email sending failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
 