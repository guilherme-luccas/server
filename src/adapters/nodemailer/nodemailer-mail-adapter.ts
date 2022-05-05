import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "56a9b48cbe87eb",
    pass: "2225939a753b1b",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedback <oi@teste.com>",
      to: " Guilherme <g_gui07@hotmail.com>",
      subject,
      html: body,
    });
  }
}
