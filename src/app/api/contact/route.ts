export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'The Flare Initiative <onboarding@resend.dev>',
      to: process.env.EMAIL_TO || 'info@flareinitiative.org',
      subject: `New message from ${name} - The Flare Initiative`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #181818; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #181818; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f8f7f5; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #415b8a; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin:0;">The Flare Initiative</h2>
      <p style="margin:5px 0 0;color:#FAB571;">New Contact Form Submission</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}