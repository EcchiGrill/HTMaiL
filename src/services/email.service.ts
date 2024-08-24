import axios from "axios";
import { IEmail } from "../types";

class EmailService {
  private URL = "https://htma1l.vercel.app/emails";

  async getEmails() {
    const { data } = await axios.get<IEmail[]>(this.URL);
    return data;
  }

  async sendEmail({ date, receiver, subject, text }: IEmail) {
    const { data } = await axios.post(this.URL, {
      date,
      receiver,
      subject,
      text,
    });
    return data;
  }
}

export const emailService = new EmailService();
