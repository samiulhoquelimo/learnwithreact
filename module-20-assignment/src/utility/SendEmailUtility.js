const nodemailer = require('nodemailer');
const smtpTransport = require("nodemailer-smtp-transport");

export async function SendEmail(
    name, email, EmailText, EmailSubject
) {
    let transporter = nodemailer.createTransport(smtpTransport({
            host: 'mail.amitjs.com',
            port: 465,
            secure: true,
            auth: {
                user: "test@amitjs.com",
                pass: 'ykf$4A0my,%P'
            }, tls: {
                rejectUnauthorized: false
            },
        })
    );

    let mailOptions = {
        from: `amitbd590@gmail.com`,
        to: `amitbd599@gmail.com`,
        subject: EmailSubject,
        text: EmailText
    };

    return await transporter.sendMail(mailOptions)
}