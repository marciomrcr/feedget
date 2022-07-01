import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b1a28aa0ec7f8b",
    pass: "2a3c7dc7563f8a"
  }
});



export class NodemailerMailAdapter implements MailAdapter{ 
   async sendMail({subject, body}: SendMailData)  {
       await transport.sendMail({
    from: 'Equipe Feedget <feedback@feedget.com>',
    to: 'Márcio Rodrigues <marcio.mrcr@outlook.com>',
    subject,
    html: body,
  })

   }
}