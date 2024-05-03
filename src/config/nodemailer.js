import nodemailer from "nodemailer";

const transporter1 = nodemailer.createTransport({
  host: "mail.smilaxglobal.com",
  port: 8889,
  secure: false, // Set to true if you are using a secure connection (e.g., TLS)
  auth: {
    user: "support@smilaxglobal.com",
    pass: "Suppor72012$",
  },
  tls: {
    rejectUnauthorized: false, // Set to false if the server's certificate is self-signed or has issues
  },
});
// subscribe@smilaxglobal.com

export const mailOptions = {
  from: "support@smilaxglobal.com",
  to: "subscribe@smilaxglobal.com",
};

export const mailPaterners = {
  from: "support@smilaxglobal.com",
  to: "contact@smilaxglobal.com",
};
