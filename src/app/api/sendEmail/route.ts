import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  const { email } = await request.json();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for subscribing!',
    text: 'Thank you for subscribing to our newsletter. We will keep you updated with the latest news and offers.',
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
