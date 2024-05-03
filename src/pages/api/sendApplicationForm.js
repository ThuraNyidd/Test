import multer from "multer";
import { configureEmailTemplate } from "../../email/email.config";
import sharp from "sharp";

import fs from "fs";
import path from "path";
const uploadsFolder = "./uploads";
export const config = {
  api: {
    bodyParser: false,
  },
};

if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder);
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsFolder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileNameWithoutExtension = path.basename(file.originalname, ext);
    const uniqueFilename = `${fileNameWithoutExtension}-${Date.now()}${ext}`; // Generate a unique filename
    cb(null, uniqueFilename);
  },
  // fileFilter: (req, file, cb) => {
  //   // Define allowed file extensions here
  //   const allowedExtensions = [".png", ".jpg", ".jpeg", ".doc", ".docx"];
  //   const ext = path.extname(file.originalname).toLowerCase();
  //   if (allowedExtensions.includes(ext)) {
  //     cb(null, true); // Accept the file
  //   } else {
  //     cb(new Error("Invalid file format"), false); // Reject the file
  //   }
  // },
});
const upload = multer({
  dest: "uploads", // Specify the destination folder for uploaded files
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  storage,
});
export default async (req, res) => {
  if (req.method === "POST") {
    try {
      // Upload the files using multer
      upload.array("files")(req, res, async (err) => {
        const subject = req.body.subject;
        const to = req.body.to;
        const template = req.body.template;
        const message = JSON.parse(req.body.message);
        const context = { subject, message };
        if (err) {
          return res.status(500).json({ error: "Error uploading files" });
        }

        // Files uploaded successfully
        // const files = req.files.map((file) => ({
        //   filename: file.filename,
        //   path: file.path,
        // }));

        // const transporter = configureEmailTemplate(template);

        // const mailOptions = {
        //   from: "support@smilaxglobal.com",
        //   to: to,
        //   subject: subject,
        //   template: template,
        //   context,
        //   attachments: files.map((file) => ({
        //     filename: file.filename,
        //     path: file.path,
        //   })),
        // };

        // await transporter.sendMail(mailOptions, (error, info) => {
        //   if (error) {
        //     res.status(500).json({ error: "Error sending email" });
        //   } else {
        //     res.status(200).json({
        //       message: "Files uploaded and email sent successfully",
        //     });
        //   }
        // });

        const files = req.files.map(async (file) => {
          const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
          const fileExtension = path.extname(file.originalname).toLowerCase();
          const fileNameWithoutExtension = path.basename(
            file.originalname,
            fileExtension
          );

          if (imageExtensions.includes(fileExtension)) {
            // Check if the file size is greater than 1 MB (1048576 bytes)
            if (file.size > 1048576) {
              const compressedFileName = `compressed-${fileNameWithoutExtension}-${Date.now()}${fileExtension}`;
              const compressedFilePath = path.join(
                uploadsFolder,
                compressedFileName
              );

              // Compress the image
              await sharp(file.path)
                .jpeg({ quality: 50 }) // Adjust the quality as needed
                .toFile(compressedFilePath);

              // Replace the original file with the compressed one
              fs.unlinkSync(file.path);
              file.path = compressedFilePath;
              file.filename = compressedFileName;
            }
          }
          return {
            filename: file.filename,
            path: file.path,
          };
        });

        // Wait for all image compression tasks to complete
        const compressedFiles = await Promise.all(files);

        const transporter = configureEmailTemplate(template);

        const mailOptions = {
          from: "support@smilaxglobal.com",
          to: to,
          subject: subject,
          template: template,
          context,
          attachments: compressedFiles.map((file) => ({
            filename: file.filename,
            path: file.path,
          })),
        };

        await transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res.status(500).json({ error: "Error sending email" });
          } else {
            res.status(200).json({
              message: "Files uploaded and email sent successfully",
            });
          }
        });
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

// const files = req.files.map(async (file) => {
//   const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
//   const fileExtension = path.extname(file.originalname).toLowerCase();
//   const fileNameWithoutExtension = path.basename(
//     file.originalname,
//     fileExtension
//   );

//   console.log(fileExtension);
//   if (imageExtensions.includes(fileExtension)) {
//     // Check if the file size is greater than 1 MB (1048576 bytes)

//     console.log("original name", file.originalname);
//     if (file.size > 1048576) {
//       const compressedFileName = `compressed-${fileNameWithoutExtension}-${Date.now()}${fileExtension}`;
//       const compressedFilePath = path.join(
//         uploadsFolder,
//         compressedFileName
//       );

//       // Compress the image
//       await sharp(file.path)
//         .jpeg({ quality: 50 }) // Adjust the quality
//         .toFile(compressedFilePath);

//       // Replace the original file with the compressed one
//       fs.unlinkSync(file.path);
//       file.path = compressedFilePath;
//       file.filename = compressedFileName;
//     }
//   }
//   return {
//     filename: file.filename,
//     path: file.path,
//   };
// });
// transporter.use(
//   "compile",
//   hbs({
//     viewEngine: {
//       extName: ".hbs",
//       partialsDir: "./src/email/templates",
//       layoutsDir: "./src/email/templates",
//       defaultLayout: template + ".hbs",
//     },
//     viewPath: "./src/email/templates",
//     extName: ".hbs",
//   })
// );
