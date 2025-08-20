import nodemailer from "nodemailer";

export const sendMail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_SMTP_HOST,
      port: process.env.MAILTRAP_SMTP_PORT,
      secure: false, // true for 465, false for other ports remove it from production
      auth: {
        user: process.env.MAILTRAP_SMTP_USER,
        pass: process.env.MAILTRAP_SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: "Inngest TMS",
      to,
      subject,
      text,
    });
    console.log("Message sent:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
    return info;
  } catch (err) {
    console.log("Mail error", err.message);
    console.error("Mail error details:", err);
    throw err;
  }
};
