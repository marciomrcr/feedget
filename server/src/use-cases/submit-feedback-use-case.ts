import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

 interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot: string  
}
 
  export class SubmitFeedbackUseCase {
constructor(
  private feedbackRepository: FeedbackRepository,
  private mailAdapter: MailAdapter,
) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
const { type, comment, screenshot} = request
      
await this.feedbackRepository.create({
  type,
  comment,
  screenshot
}) 

await this.mailAdapter.sendMail({
  subject: 'Novo feedback',
  body: [
    `<div style="font-family: sans-serif; font-size: 14px; color: #111;">`,
    `<p>Tipo de Feedback: ${type}</p>`,
    `<p>Comentário: ${comment}</p>`,
    `</div>`
  ].join('\n')
})
  }
  } 