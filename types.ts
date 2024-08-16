export interface IEmail {
  id: string;
  receiver: string;
  subject: string;
  text: string;
  date: string;
}

export interface IEmailPreview {
  text: string;
}
