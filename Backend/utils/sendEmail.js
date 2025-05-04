import { config } from 'dotenv';
import nodeMailer from 'nodemailer';
config()
export const sendEmail = async (options) => {
  // console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL);
  // console.log("SMTP_PORT:", process.env.SMTP_PORT);

  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt( process.env.SMTP_PORT),
        service: process.env.SMTP_SERVICE,
        secure:process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
// console.log("options text: ",options.message);
    
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: options.email,
      subject: options.subject,
      text: `${options.message}\n\n Email sent from ${options.userEmail}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}