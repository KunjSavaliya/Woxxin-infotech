import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        console.log("📥 API Route Triggered");
        const formData = await req.formData();

        const data = {
            teamSize: formData.get('teamSize'),
            country: formData.get('country'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            portfolioAnswer: formData.get('portfolioAnswer'),
            portfolioLink: formData.get('portfolioLink'),
            publisherAnswer: formData.get('publisherAnswer'),
            publisherLink: formData.get('publisherLink'),
            message: formData.get('message'),
            policyAgreed: formData.get('policyAgreed') === 'on',
        };

        console.log("✅ Parsed Data:", data);

        if (!data.email || !data.firstName || !data.lastName) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Missing required fields',
            }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT),
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER, // ✅ FIXED
            to: process.env.EMAIL_RECEIVER, // ✅ FIXED
            subject: 'New Contact Form Submission',
            html: `
                <h3>Contact Submission</h3>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Team Size:</strong> ${data.teamSize}</p>
                <p><strong>Country:</strong> ${data.country}</p>
                <p><strong>Portfolio:</strong> ${data.portfolioAnswer} - ${data.portfolioLink}</p>
                <p><strong>Publisher History:</strong> ${data.publisherAnswer} - ${data.publisherLink}</p>
                <p><strong>Message:</strong> ${data.message}</p>
                <p><strong>Agreed to Policy:</strong> ${data.policyAgreed ? 'Yes' : 'No'}</p>
            `,
        });

        console.log("✅ Email sent:", info.messageId);
        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error("❌ Email sending error:", error);
        return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
    }
}
