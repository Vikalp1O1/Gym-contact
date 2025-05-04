import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";


const app = express();
const router = express.Router();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post('/send/email', async (req, res) => {
    // console.log("Request body:", req.body);
    const { name , email, message } = req.body;
if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }
    
    try {
        await sendEmail({email:"v0338205@gmail.com", subject: "Contact Form Submission for GYM", message, userEmail: email});
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
    }
   
});

app.use(router);

config({ path: "./.env" });
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

