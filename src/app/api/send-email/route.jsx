import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    console.time("📨 EmailProcess");

    const formData = await req.formData();

    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const position = formData.get('position');
    const message =
      formData.get('message') || formData.get('additionalInfo') || '';
    const resumeFile = formData.get('resume');

    if (!fullName || !email || !position || !resumeFile) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // File size limit: 2MB
    if (resumeFile.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'Resume file too large (max 2MB)' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // IMPORTANT
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify(); // ✅ confirms SMTP works

    await transporter.sendMail({
      from: `"Career Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Job Application – ${fullName}`,
      html: `
        <h3>New Application Received</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    });

    console.timeEnd("📨 EmailProcess");

    return NextResponse.json({
      success: true,
      message: 'Form submitted & email sent successfully',
    });
  } catch (error) {
    console.error('❌ API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Email failed to send' },
      { status: 500 }
    );
  }
}
