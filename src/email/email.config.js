// email.config.js
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

// Call the function before configuring the new template
export function configureEmailTemplate(template) {
  let handlebarsEngines = {};
  if (!handlebarsEngines[template]) {
    handlebarsEngines[template] = hbs({
      viewEngine: {
        extName: ".hbs",
        partialsDir: "./src/email/templates",
        layoutsDir: "./src/email/templates",
        defaultLayout: `${template}.hbs`,
      },
      viewPath: "./src/email/templates",
      extName: ".hbs",
    });
  }
  const transporter = nodemailer.createTransport({
    host: "mail.smilaxglobal.com",
    port: 8889,
    service: "microsoft",
    auth: {
      user: "support@smilaxglobal.com",
      pass: "Suppor72012$",
    },
  });

  transporter.use("compile", handlebarsEngines[template]);
  return transporter;
}
