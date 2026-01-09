import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const appUrl = formData.get('appUrl');
      
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            // tls: {
            //     rejectUnauthorized: false,
            // },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            subject: `New App Submission from ${fullName}`,
            html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>App URL:</strong> ${appUrl}</p>
      `,
        };
await transporter.sendMail(mailOptions);

        return Response.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        return Response.json({ success: false, message: error.message }, { status: 500 });
    }
}
