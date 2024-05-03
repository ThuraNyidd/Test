import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { captcha_value } = req.body;
      //dev
      const SITE_SECRET = "6LcYmKIoAAAAALj3ZUwWL3en1cShbKse7vFkqEij";

      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captcha_value}`
      );
      if (response.data.success) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ error: "Failed Captcha" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
