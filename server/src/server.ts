
import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b1a28aa0ec7f8b",
    pass: "2a3c7dc7563f8a"
  }
});

app.post('/feedbacks', async (req, res) =>
{
  const { type, comment, screenshot} = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

   await transport.sendMail({
    from: 'Equipe Feedget <feedback@feedget.com>',
    to: 'Márcio Rodrigues <marcio.mrcr@outlook.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 14px; color: #111;">`,
      `<p>Tipo de Feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

 return res.status(201).json( { data: feedback})
})

app.listen(3333, ()=> {
  console.log('Server is running. Glory to God!')
})
