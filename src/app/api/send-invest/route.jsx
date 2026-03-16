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
            subject: `New Investment Inquiry from ${fullName}`,
            html: `
  <div style="font-family: Arial, sans-serif; background:#f4f6fb; padding:30px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.08);">
      
      <div style="background:linear-gradient(90deg,#5961F9,#8f6dfd); padding:20px; text-align:center; color:white;">
        <h2 style="margin:0;">New Investment Inquiry Received</h2>
        <p style="margin:5px 0 0; font-size:14px;">A new investment inquiry has been submitted on the website.</p>
      </div>

      <div style="padding:25px;">
        
        <table style="width:100%; border-collapse:collapse;">
          
          <tr>
            <td style="padding:10px 0; font-weight:bold; color:#555;">Full Name :</td>
            <td style="padding:10px 0; color:#111;">${fullName}</td>
          </tr>

          <tr>
            <td style="padding:10px 0; font-weight:bold; color:#555;">Email Address :</td>
            <td style="padding:10px 0; color:#111;">${email}</td>
          </tr>

          <tr>
            <td style="padding:10px 0; font-weight:bold; color:#555;">App URL :</td>
            <td style="padding:10px 0;">
              <a href="${appUrl}" style="color:#5961F9; text-decoration:none;">
                ${appUrl}
              </a>
            </td>
          </tr>

        </table>

      </div>

      <div style="background:#f7f8fc; padding:15px; text-align:center; font-size:13px; color:#777;">
        This message was generated from your website investment form.
      </div>

    </div>

  </div>
  `,
        };
        await transporter.sendMail(mailOptions);

        return Response.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        return Response.json({ success: false, message: error.message }, { status: 500 });
    }
}
