

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        console.time("📨 FullEmailProcess");

        const formData = await req.formData();

        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const position = formData.get('position');
        const message = formData.get('message') || formData.get('additionalInfo'); // fallback
        const resumeFile = formData.get('resume');

        console.log("📥 Form received");
        console.log("🔍 Receiver:", process.env.EMAIL_RECEIVER);
        console.log("📄 Resume file:", resumeFile?.name, resumeFile?.size);

        if (!fullName || !email || !position || !resumeFile) {
            return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
        }

        // Optional: Limit file size (e.g., max 2 MB)
        if (resumeFile.size > 2 * 1024 * 1024) {
            return NextResponse.json({ success: false, message: "Resume file too large (max 2MB)." }, { status: 400 });
        }

        // Optimistically respond BEFORE sending email
        setTimeout(async () => {
            try {
                console.time("📤 EmailSendTime");

                const transporter = nodemailer.createTransport({
                    host: process.env.EMAIL_HOST,
                    port: parseInt(process.env.EMAIL_PORT),
                    secure: false,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                });

                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_RECEIVER,
                    subject: `New Application from ${fullName}`,
                    html: `
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
                    attachments: [],
                };

                if (resumeFile && resumeFile.name) {
                    const buffer = Buffer.from(await resumeFile.arrayBuffer());
                    mailOptions.attachments.push({
                        filename: resumeFile.name,
                        content: buffer,
                    });
                }

                const result = await transporter.sendMail(mailOptions);
                console.log("✅ Email sent:", result.response);

                console.timeEnd("📤 EmailSendTime");
            } catch (emailError) {
                console.error("❌ Async Email Error:", emailError);
            }
        }, 0);

        console.timeEnd("📨 FullEmailProcess");

        return NextResponse.json({ success: true, message: "Form submitted successfully" });
    } catch (error) {
        console.error("❌ Main API Error:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
