import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
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


        if (!data.email || !data.firstName || !data.lastName) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Missing required fields',
            }), { status: 400 });
        }

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

        const info = await transporter.sendMail({
            from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: "New Contact Us Form Submission",
            html: `
  <div style="font-family:Arial, sans-serif; background:#f4f6fb; padding:30px;">
    
    <table width="650" align="center" cellpadding="0" cellspacing="0"
    style="background:#ffffff;border-radius:8px;overflow:hidden;
    box-shadow:0 4px 15px rgba(0,0,0,0.08);">

      <tr>
        <td style="background:linear-gradient(90deg,#5961F9,#8B5CF6);
        padding:20px;text-align:center;color:#fff;">
          <h2 style="margin:0;">New Contact Form Submission</h2>
          <p style="margin:5px 0 0;font-size:14px;">
            A new Contact Us form has been submitted on the website
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:25px;">

          <table width="100%" cellpadding="10" cellspacing="0"
          style="border-collapse:collapse;font-size:15px;">

            <tr style="border-bottom:1px solid #eee;">
              <td style="font-weight:bold;color:#555;">Contact Person :</td>
              <td>${data.firstName} ${data.lastName}</td>
            </tr>

            <tr style="border-bottom:1px solid #eee;">
              <td style="font-weight:bold;color:#555;">Email Address :</td>
              <td>${data.email}</td>
            </tr>

            <tr style="border-bottom:1px solid #eee;">
              <td style="font-weight:bold;color:#555;">
              Company / Developer Name :
              </td>
              <td>${data.teamSize}</td>
            </tr>

            <tr style="border-bottom:1px solid #eee;">
              <td style="font-weight:bold;color:#555;">Country :</td>
              <td>${data.country}</td>
            </tr>

            <tr style="border-bottom:1px solid #eee;">
              <td style="font-weight:bold;color:#555;">
              Portfolio / Gameplay Link :
              </td>
              <td>
                ${data.portfolioAnswer} <br/>
                <a href="${data.portfolioLink}" style="color:#5961F9;">
                  ${data.portfolioLink}
                </a>
              </td>
            </tr>

            <tr style="border-bottom:1px solid #eee;">
              <td style="font-weight:bold;color:#555;">
              Worked with other publishers :
              </td>
              <td>
                ${data.publisherAnswer} <br/>
                <a href="${data.publisherLink}" style="color:#5961F9;">
                  ${data.publisherLink}
                </a>
              </td>
            </tr>

            <tr style="border-bottom:1px solid #eee;">
              <td style="font-weight:bold;color:#555;">Message :</td>
              <td>${data.message || "N/A"}</td>
            </tr>

            <tr>
              <td style="font-weight:bold;color:#555;">Policy Agreement :</td>
              <td>${data.policyAgreed ? "Yes" : "No"}</td>
            </tr>

          </table>

        </td>
      </tr>

      <tr>
        <td style="background:#f7f8fc;padding:15px;text-align:center;
        font-size:13px;color:#777;">
          This email was generated from your website contact form.
        </td>
      </tr>

    </table>

  </div>
  `,
        });
        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
    }
}
