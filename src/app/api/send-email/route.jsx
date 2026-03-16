// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

// export const runtime = 'nodejs';

// export async function POST(req) {
//   try {
//     console.time("📨 EmailProcess");

//     const formData = await req.formData();

//     const fullName = formData.get('fullName');
//     const email = formData.get('email');
//     const position = formData.get('position');
//     const message =
//       formData.get('message') || formData.get('additionalInfo') || '';
//     const resumeFile = formData.get('resume');

//     if (!fullName || !email || !position || !resumeFile) {
//       return NextResponse.json(
//         { success: false, message: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // File size limit: 2MB
//     if (resumeFile.size > 2 * 1024 * 1024) {
//       return NextResponse.json(
//         { success: false, message: 'Resume file too large (max 2MB)' },
//         { status: 400 }
//       );
//     }

//     const buffer = Buffer.from(await resumeFile.arrayBuffer());

//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: Number(process.env.EMAIL_PORT),
//       secure: Number(process.env.EMAIL_PORT) === 465, // IMPORTANT
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.verify(); // ✅ confirms SMTP works

//     await transporter.sendMail({
//       from: `"Career Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_RECEIVER,
//       subject: `New Job Application – ${fullName}`,
//       html: `
//         <h3>New Job Application Received</h3>
//         <p><strong>Name:</strong> ${fullName}</p>
//         <p><strong>Email Address:</strong> ${email}</p>
//         <p><strong>Position:</strong> ${position}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//       attachments: [
//         {
//           filename: resumeFile.name,
//           content: buffer,
//         },
//       ],
//     });

//     console.timeEnd("📨 EmailProcess");

//     return NextResponse.json({
//       success: true,
//       message: 'Form submitted & email sent successfully',
//     });
//   } catch (error) {
//     console.error('❌ API Error:', error);
//     return NextResponse.json(
//       { success: false, message: 'Email failed to send' },
//       { status: 500 }
//     );
//   }
// }
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Create transporter once (faster)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: Number(process.env.EMAIL_PORT) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    console.time("EmailProcess");

    const formData = await req.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const position = formData.get("position");
    const message =
      formData.get("message") || formData.get("additionalInfo") || "";
    const resumeFile = formData.get("resume");

    // Validation
    if (!fullName || !email || !position || !resumeFile) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // File size check (2MB)
    if (resumeFile.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "Resume must be under 2MB" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    // Professional Email Template
    const emailHTML = `
    <div style="font-family:Arial, sans-serif; background:#f4f6fb; padding:30px;">
      
      <table width="600" align="center" cellpadding="0" cellspacing="0" 
      style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">

        <tr>
          <td style="background:linear-gradient(90deg,#5961F9,#8B5CF6); padding:20px; color:#fff; text-align:center;">
            <h2 style="margin:0;">New Job Application</h2>
            <p style="margin:5px 0 0; font-size:14px;">A new job application has been submitted on the website.</p>
          </td>
        </tr>

        <tr>
          <td style="padding:25px;">
            
            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

              <tr style="border-bottom:1px solid #eee;">
                <td style="font-weight:bold; color:#555;">Full Name :</td>
                <td>${fullName}</td>
              </tr>

              <tr style="border-bottom:1px solid #eee;">
                <td style="font-weight:bold; color:#555;">Email Address :</td>
                <td>${email}</td>
              </tr>

              <tr style="border-bottom:1px solid #eee;">
                <td style="font-weight:bold; color:#555;">Position :</td>
                <td>${position}</td>
              </tr>

              <tr>
                <td style="font-weight:bold; color:#555;">Message :</td>
                <td>${message || "N/A"}</td>
              </tr>

            </table>

          </td>
        </tr>

        <tr>
          <td style="background:#f7f8fc; padding:15px; text-align:center; font-size:13px; color:#777;">
            Resume is attached with this email.
          </td>
        </tr>

      </table>

    </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Career Application" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Job Application – ${fullName}`,
      html: emailHTML,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    });

    console.timeEnd("EmailProcess");

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });

  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}