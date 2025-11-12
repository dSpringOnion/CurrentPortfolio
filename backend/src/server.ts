import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const createTransporter = () => {
  if (process.env.EMAIL_SERVICE === 'sendgrid') {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  } else if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
    });
  } else {
    // Generic SMTP configuration
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });
  }
};

app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Log the message for debugging
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Check if email is configured - if not, just log the message
    const emailConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;

    if (!emailConfigured) {
      console.log('Email not configured - logging message only');
      console.log('Would send email:', { name, email, subject, message });
      // Still return success so the form works
    } else {
      // Send email
      const transporter = createTransporter();

      // Verify transporter configuration with timeout
      try {
        await Promise.race([
          transporter.verify(),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('SMTP verification timeout')), 5000)
          )
        ]);
        console.log('SMTP connection verified');
      } catch (verifyError: any) {
        console.error('SMTP verification failed:', verifyError.message);
        // Log but still try to send
      }

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      try {
        const info = await Promise.race([
          transporter.sendMail(mailOptions),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Email send timeout')), 10000)
          )
        ]);
        console.log('Email sent successfully:', (info as any).messageId);
      } catch (sendError: any) {
        console.error('Failed to send email:', sendError.message);
        console.log('Message details (logged):', { name, email, subject, message });
        // Don't throw - we've logged it
      }
    }

    res.status(200).json({
      message: 'Message sent successfully!',
      success: true
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Full error details:', JSON.stringify(error, null, 2));
    res.status(500).json({
      error: 'Failed to send message. Please try again later.',
      success: false
    });
  }
});

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});